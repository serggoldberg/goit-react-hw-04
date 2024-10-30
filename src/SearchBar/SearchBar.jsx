import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const fieldEmpty = () => toast("Please, enter on the searching field");

  const initialValues = { query: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        if (values.query.trim() === "") {
          fieldEmpty();
        } else {
          onSubmit(values.query);
        }
        actions.resetForm();
      }}
    >
      <header>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </header>
    </Formik>
  );
};

export default SearchBar;
