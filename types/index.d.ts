interface simplifiedProduct {
  map(arg0: (product: any) => React.JSX.Element): React.ReactNode;
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  discription: string;
  price_id: string;
}
