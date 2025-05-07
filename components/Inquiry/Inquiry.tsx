"use client";

import React, { useState } from "react";
import {
  BackgroundType,
  ComponentEntity,
  useSendInquiryEmailMutation,
} from "@/graphql/generated/types";
import { useToastMessage } from "@/hooks";
import { BeatLoader } from "react-spinners";
import * as S from "./Inquiry.style";

interface Props {
  id: string;
  data: ComponentEntity;
  siteId: number;
}

export const Inquiry = ({ id, siteId, data }: Props) => {
  const { ToastMessage } = useToastMessage();

  const [emailForm, setEmailForm] = useState({
    userEmail: "",
    phoneNumber: "",
    content: "",
  });

  const [loadSendInquiryEmail, { loading }] = useSendInquiryEmailMutation({
    onCompleted: () => {
      setEmailForm({
        userEmail: "",
        phoneNumber: "",
        content: "",
      });

      ToastMessage("info", "문의 메일이 전송되었습니다.");
    },
    onError: (e) => {
      ToastMessage("error", `${e.message ?? e}`);
    },
  });

  const handleChange = (key: string) => (e: any) => {
    setEmailForm({
      ...emailForm,
      [key]: e.target.value,
    });
  };

  const handleSubmit = () => {
    loadSendInquiryEmail({
      variables: {
        id: siteId,
        ...emailForm,
      },
    });
  };

  return (
    <S.Container id={id} $height={data.componentStyle?.height || undefined}>
      <S.InquiryImage
        id={id}
        style={
          data.componentStyle?.backgroundType === BackgroundType.Color
            ? {
                backgroundColor: data.componentStyle.background ?? "#FFF",
              }
            : data.componentStyle?.backgroundType === BackgroundType.Image
            ? {
                backgroundImage:
                  `url(${process.env.NEXT_PUBLIC_BASE_URL}/file/${data.componentStyle.background})` ||
                  "none",
              }
            : undefined
        }
      />

      <S.InquiryBox $inquiryStyle={data.inquiryStyle ?? undefined}>
        <S.Title $titleStyle={data.titleStyle ?? undefined}>{data.title}</S.Title>
        <S.Content
          $contentStyle={data.contentStyle ?? undefined}
          dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
        />

        <S.Form $inquiryStyle={data.inquiryStyle ?? undefined}>
          <label className="">이메일</label>
          <input
            value={emailForm.userEmail}
            onChange={handleChange("userEmail")}
            placeholder="abc@gmail.com"
            className="p-3 border rounded-md"
          />

          <label className="">전화번호</label>
          <input
            value={emailForm.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="010-1234-1234"
            className="p-3 border rounded-md"
          />

          <label className="">문의내용</label>
          <textarea
            value={emailForm.content}
            onChange={handleChange("content")}
            placeholder="최소 10자 이상 작성해주세요."
            className="h-[200px] p-3 border rounded-md resize-none"
          />

          <S.Button
            onClick={handleSubmit}
            disabled={loading}
            $inquiryStyle={data.inquiryStyle ?? undefined}
          >
            {loading ? (
              <BeatLoader size={10} speedMultiplier={0.75} color="#FFF" />
            ) : (
              <p>문의하기</p>
            )}
          </S.Button>
        </S.Form>
      </S.InquiryBox>
    </S.Container>
  );
};
