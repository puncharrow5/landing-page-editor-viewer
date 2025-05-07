import { gql } from "@apollo/client";

export const SEND_INQUIRY_EMAIL = gql`
  mutation SendInquiryEmail(
    $id: Int!
    $userEmail: String!
    $phoneNumber: String!
    $content: String!
  ) {
    SendInquiryEmail(id: $id, userEmail: $userEmail, phoneNumber: $phoneNumber, content: $content)
  }
`;
