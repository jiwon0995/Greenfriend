import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { Formvalues } from "../../write/BoardWrite.types";
import CommentsWriteUI from "./CommentsWrite.pregenter";
import { CREATE_BOARD_COMMENT } from "./CommentsWrite.queries";
import { schema } from "./CommentsWrite.validations"

export default function CommentsWrite() {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickCreateComment = async (data:Formvalues) => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data?.writer,
            password: data?.password,
            contents: data?.contents,
            rating: 0,
          },
          boardId: String(router.query.Id),
        },
      });
      console.log(result.data?.createBoardComment._id);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <CommentsWriteUI onClickCreateComment={onClickCreateComment} />;
}
