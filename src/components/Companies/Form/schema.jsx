import * as yup from "yup";

export const SCHEMA = yup.object().shape({
  name: yup.string().required("Company name is a required field"),
  location: yup.string().required("Company location is a required field"),
  phoneNumber: yup
    .string()
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, {
      message: "Wrong phone number format",
      excludeEmptyString: true,
    }),
  address: yup.string("Must be a string"),
  person: yup.array(
    yup.object({
      name: yup.string().max(35, "Full name must be at most 35 characters"),
      position: yup.string(),
    })
  ),
});
