export type commonType = {
  id: number;
  title: string;
};
export type PostType = {
  id: number;
  updatedAt: string;
  title: string;
  companyName: string;
  salary: string;
  address: string;
  tel: string;
  email: string;
  image_url: string;
  category: string;
  hiringType: string;
  exp: string;
  jobDescription: commonType[];
  responsibility: commonType[];
  qualification: commonType[];
  benefit: commonType[];
};
