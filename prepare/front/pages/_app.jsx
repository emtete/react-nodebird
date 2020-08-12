import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const NordBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8'></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NordBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NordBird);
