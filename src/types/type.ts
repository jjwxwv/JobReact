export type commonType = {
  id: number;
  title: string;
};
export type PostCardType = {
  id: number;
  image_url: string;
  title: string;
  companyName: string;
  address: string;
  category: string;
  salary: string;
  updatedAt: string;
  responsibility: commonType[];
};
export type PostType = {
  image_url: string;
  title: string;
  companyName: string;
  companyId: number;
  email: string;
  tel: string;
  updatedAt: string;
  address: string;
  category: string;
  hiringType: string;
  salary: string;
  exp: string;
  benefit: commonType[];
  responsibility: commonType[];
  qualification: commonType[];
};
export type CompanyType = {
  id: number;
  companyName: string;
  address: string;
  tel: string;
  email: string;
  image_url: string;
  companyDescription: string;
};
export type DataType = {
  page: number;
  perPage: number;
  totalPages: number;
  totalPost: number;
  post: PostCardType[];
};
export type PostPageType = {
  page: number;
  perPage: number;
  totalPages: number;
  totalPost: number;
};
// export type CompanyWithPostType = {
//   page: number;
//   perPage: number;
//   totalPages: number;
//   totalPost: number;
//   post: PostCardType[];
//   company: CompanyType;
// };
