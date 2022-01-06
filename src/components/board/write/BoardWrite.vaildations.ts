import *as yup from "yup"

export const schema = yup.object().shape({
  writer: yup
    .string()
    .required("*필수입력 사항입니다."),
  title: yup
    .string()
    .required("*필수입력 사항입니다."),
  password: yup
    .string()
    .min(4, "*비밀번호는 최소 4자리 이상입니다.")
    .max(6, "*비밀번호는 최대 6자리 입니다.")
    .required("*필수입력 사항입니다."),
  contents: yup
    .string()
    .required("*필수입력 사항입니다."),
})

export const schema2 = yup.object().shape({
  writer: yup
    .string(),
  title: yup
    .string(),
  password: yup
    .string()
    .min(4, "*비밀번호는 최소 4자리 이상입니다.")
    .max(6, "*비밀번호는 최대 6자리 입니다.")
    .required("*필수입력 사항입니다."),
})
