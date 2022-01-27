import *as yup from "yup"

export const schema = yup.object().shape({
  writer: yup
    .string()
    .required("*필수입력 사항입니다."),
  passwird: yup
    .string()
    .min(4)
    .max(6)
    .required("*필수입력 사항입니다."),
  contents: yup
    .string()
    .required("*필수입력 사항입니다.")
})