export enum CartItemType {
  Product = "Product",
  Pack = "Pack",
}

interface CommonCartItemProps {
  name: string;
  value?: number;
  id: string;
}

type Product = CommonCartItemProps & {
  type: CartItemType.Product;
  description?: string;
};

type Pack = CommonCartItemProps & {
  type: CartItemType.Pack;
  content: Product[];
};

export type CartItemProps = Product | Pack;
