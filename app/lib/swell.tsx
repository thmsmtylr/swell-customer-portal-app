"use client";
// @ts-ignore
import swell from "swell-js";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";

swell.init(
  process.env.NEXT_PUBLIC_SWELL_STORE_ID ?? "",
  process.env.NEXT_PUBLIC_SWELL_STORE_KEY ?? "",
  {
    url: process.env.NEXT_PUBLIC_SWELL_STORE_URL ?? "",
  },
);

const defaultContext = {
  isLoading: true,
  setIsLoading: (_isLoading: boolean) => {},
  customer: null,
};

export const SwellContext = createContext(defaultContext);

export function useSwellContext() {
  return useContext(SwellContext);
}

export function useStore() {
  const [store, setStore] = useState<any>(null);
  const { setIsLoading } = useContext(SwellContext);

  useEffect(() => {
    setIsLoading(true);
    swell.settings
      .get()
      .then((data) => {
        setStore(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Store error", error);
        setIsLoading(false);
      });
  }, []);

  return { store };
}

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<any>([]);
  const [customer, setCustomer] = useState<any>(null);
  const [product, setProduct] = useState<any>({});
  const { setIsLoading } = useContext(SwellContext);

  useEffect(() => {
    setIsLoading(true);

    swell.account
      .login(
        process.env.NEXT_PUBLIC_SWELL_STORE_CUSTOMER_EMAIL ?? "",
        process.env.NEXT_PUBLIC_SWELL_STORE_CUSTOMER_PASSWORD ?? "",
      )
      .then((data) => {
        setCustomer(data);
        return swell.subscriptions.list();
      })
      .then((data) => {
        setSubscriptions(data);
        const product_id = data?.results[0]?.product?.id;
        return swell.products.get(product_id);
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Subscription error", error);
        setIsLoading(false);
      });
  }, []);

  return { subscriptions, product, customer };
}

export function useBundledItems() {}

export function SwellProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SwellContext.Provider
      value={{ ...defaultContext, isLoading, setIsLoading }}
    >
      {children}
    </SwellContext.Provider>
  );
}
