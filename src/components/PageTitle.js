import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | React-Practice 2</title>
    </Helmet>
  );
};
