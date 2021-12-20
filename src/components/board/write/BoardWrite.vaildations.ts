import *as yup from "yup"

export const schema = yup.object().shape({
  title: yup
    .string()
    .required("필수입력 사항입니다."),
  password: yup
    .string()
    .min(4, "최소 4자리 이상입니다.")
    .max(6, "최대 6자리 입니다.")
    .required("필수입력 사항입니다."),
  contents: yup
    .string()
    .required("필수입력 사항입니다.")
})
