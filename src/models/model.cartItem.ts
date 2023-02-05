export enum CartItemType {
  Product = "Product",
  Pack = "Pack",
}

type imageDTO = {
  src: string;
  alt: string;
};

interface CommonCartItemProps {
  name: string;
  value?: number;
  id: string;
  image?: imageDTO;
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
