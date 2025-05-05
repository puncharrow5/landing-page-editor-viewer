import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** 관리자 */
export type AdminEntity = {
  /** 이메일 */
  email: Scalars['String']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
  /** 비밀번호 */
  password: Scalars['String']['output'];
  /** 이름 */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** 리프레시 토큰 */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** 관리자 권한 */
  role?: Maybe<RoleEntity>;
  /** 관리자 권한 ID */
  roleId: Scalars['Int']['output'];
};

/** 배경 종류 */
export enum BackgroundType {
  /** 색상 */
  Color = 'COLOR',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 자식 컴포넌트 */
export type ChildEntity = {
  /** 자식 컴포넌트 스타일 */
  childStyle?: Maybe<ChildStyleEntity>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
};

/** 자식 컴포넌트 스타일 */
export type ChildStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 테두리 곡률 */
  borderRadius?: Maybe<Scalars['String']['output']>;
  /** 자식컴포넌트 ID */
  childId: Scalars['Int']['output'];
  /** 내용 색상 */
  contentColor?: Maybe<Scalars['String']['output']>;
  /** 내용 줄 높이 */
  contentLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 내용 마진 */
  contentMargin?: Maybe<Scalars['String']['output']>;
  /** 내용 크기 */
  contentSize?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 제목 색상 */
  titleColor?: Maybe<Scalars['String']['output']>;
  /** 제목 줄 높이 */
  titleLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 제목 마진 */
  titleMargin?: Maybe<Scalars['String']['output']>;
  /** 제목 크기 */
  titleSize?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

export type ChildStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 테두리 */
  border?: InputMaybe<Scalars['String']['input']>;
  /** 테두리 곡률 */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /** 내용 색상 */
  contentColor?: InputMaybe<Scalars['String']['input']>;
  /** 내용 줄 높이 */
  contentLineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 내용 마진 */
  contentMargin?: InputMaybe<Scalars['String']['input']>;
  /** 내용 크기 */
  contentSize?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 제목 색상 */
  titleColor?: InputMaybe<Scalars['String']['input']>;
  /** 제목 줄 높이 */
  titleLineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 제목 마진 */
  titleMargin?: InputMaybe<Scalars['String']['input']>;
  /** 제목 크기 */
  titleSize?: InputMaybe<Scalars['String']['input']>;
  /** 너비 */
  width?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 */
export type ComponentEntity = {
  /** 자식 컴포넌트 목록 */
  children?: Maybe<Array<ChildEntity>>;
  /** 컴포넌트 모바일 스타일 */
  componentMobileStyle?: Maybe<ComponentMobileStyleEntity>;
  /** 컴포넌트 스타일 */
  componentStyle?: Maybe<ComponentStyleEntity>;
  /** 컴포넌트 종류 */
  componentType: ComponentType;
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 내용 스타일 */
  contentStyle?: Maybe<ContentStyleEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 문의 스타일 */
  inquiryStyle?: Maybe<InquiryStyleEntity>;
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 목록 */
  mobileChildren?: Maybe<Array<MobileChildEntity>>;
  /** 모바일 내용 */
  mobileContent?: Maybe<Scalars['String']['output']>;
  /** 모바일 문의 스타일 */
  mobileInquiryStyle?: Maybe<MobileInquiryStyleEntity>;
  /** 모바일 제목 */
  mobileTitle?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<TitleStyleEntity>;
};

/** 컴포넌트 모바일 스타일 */
export type ComponentMobileStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** ID */
  grid?: Maybe<Scalars['Int']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
};

export type ComponentMobileStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 그리드 */
  grid?: InputMaybe<Scalars['Int']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 스타일 */
export type ComponentStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** ID */
  grid?: Maybe<Scalars['Int']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
};

export type ComponentStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 그리드 */
  grid?: InputMaybe<Scalars['Int']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 종류 */
export enum ComponentType {
  /** 문의 */
  Inquiry = 'INQUIRY',
  /** 섹션 */
  Section = 'SECTION'
}

/** 내용 스타일 */
export type ContentStyleEntity = {
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 색상 */
  mobileColor?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['String']['output']>;
};

export type ContentStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 색상 */
  mobileColor?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['String']['input']>;
};

/** 푸터 */
export type FooterEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 하단 내용 */
  contentBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 내용 */
  contentTop?: Maybe<Scalars['String']['output']>;
  /** 푸터 타입 */
  footerType: Scalars['Int']['output'];
  /** 고객센터 */
  helpCenter?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 하단 패딩 */
  paddingBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 패딩 */
  paddingTop?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 약관 */
  terms?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

/** 헤더 */
export type HeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

/** 활동 내역 */
export type HistoryEntity = {
  /** 관리자 ID */
  adminId: Scalars['Float']['output'];
  /** 자식컴포넌트 ID */
  childId?: Maybe<Scalars['Float']['output']>;
  /** 컴포넌트 ID */
  componentId?: Maybe<Scalars['Float']['output']>;
  /** 시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 내용 */
  description: Scalars['String']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 모바일 자식컴포넌트 ID */
  mobileChildId?: Maybe<Scalars['Float']['output']>;
  /** 사이트 */
  site?: Maybe<SiteEntity>;
  /** 사이트 ID */
  siteId: Scalars['Float']['output'];
};

/** 문의 스타일 */
export type InquiryStyleEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 높이 */
  buttonHeight?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonRadius?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonTextColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 크기 */
  buttonTextSize?: Maybe<Scalars['String']['output']>;
  /** 버튼 너비 */
  buttonWidth?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

export type InquiryStyleInput = {
  /** 배경 색상 */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 색상 */
  buttonColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 높이 */
  buttonHeight?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 곡률 */
  buttonRadius?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 색상 */
  buttonTextColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 크기 */
  buttonTextSize?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 너비 */
  buttonWidth?: InputMaybe<Scalars['String']['input']>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 색상 */
  textColor?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  textSize?: InputMaybe<Scalars['String']['input']>;
};

/** 모바일 자식 컴포넌트 */
export type MobileChildEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 스타일 */
  mobileChildStyle?: Maybe<MobileChildStyleEntity>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
};

/** 모바일 자식 컴포넌트 스타일 */
export type MobileChildStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 테두리 곡률 */
  borderRadius?: Maybe<Scalars['String']['output']>;
  /** 내용 색상 */
  contentColor?: Maybe<Scalars['String']['output']>;
  /** 내용 줄 높이 */
  contentLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 내용 마진 */
  contentMargin?: Maybe<Scalars['String']['output']>;
  /** 내용 크기 */
  contentSize?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 자식 컴포넌트 ID */
  mobileChildId: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 제목 색상 */
  titleColor?: Maybe<Scalars['String']['output']>;
  /** 제목 줄 높이 */
  titleLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 제목 마진 */
  titleMargin?: Maybe<Scalars['String']['output']>;
  /** 제목 크기 */
  titleSize?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

export type MobileChildStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 테두리 */
  border?: InputMaybe<Scalars['String']['input']>;
  /** 테두리 곡률 */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /** 내용 색상 */
  contentColor?: InputMaybe<Scalars['String']['input']>;
  /** 내용 줄 높이 */
  contentLineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 내용 마진 */
  contentMargin?: InputMaybe<Scalars['String']['input']>;
  /** 내용 크기 */
  contentSize?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 제목 색상 */
  titleColor?: InputMaybe<Scalars['String']['input']>;
  /** 제목 줄 높이 */
  titleLineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 제목 마진 */
  titleMargin?: InputMaybe<Scalars['String']['input']>;
  /** 제목 크기 */
  titleSize?: InputMaybe<Scalars['String']['input']>;
  /** 너비 */
  width?: InputMaybe<Scalars['String']['input']>;
};

/** 모바일 푸터 */
export type MobileFooterEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 하단 내용 */
  contentBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 내용 */
  contentTop?: Maybe<Scalars['String']['output']>;
  /** 푸터 타입 */
  footerType: Scalars['Int']['output'];
  /** 고객센터 */
  helpCenter?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 하단 패딩 */
  paddingBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 패딩 */
  paddingTop?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 약관 */
  terms?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

/** 헤더 */
export type MobileHeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 */
  button?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 사이즈 */
  buttonSize?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 메뉴 배경 색상 */
  menuBackgroundColor?: Maybe<Scalars['String']['output']>;
  /** 메뉴 패딩 */
  menuPadding?: Maybe<Scalars['String']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

/** 모바일문의 스타일 */
export type MobileInquiryStyleEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 높이 */
  buttonHeight?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonRadius?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 색상 */
  buttonTextColor?: Maybe<Scalars['String']['output']>;
  /** 버튼 텍스트 크기 */
  buttonTextSize?: Maybe<Scalars['String']['output']>;
  /** 버튼 너비 */
  buttonWidth?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['String']['output']>;
};

export type MobileInquiryStyleInput = {
  /** 배경 색상 */
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 색상 */
  buttonColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 높이 */
  buttonHeight?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 색상 */
  buttonRadius?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 색상 */
  buttonTextColor?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 텍스트 크기 */
  buttonTextSize?: InputMaybe<Scalars['String']['input']>;
  /** 버튼 너비 */
  buttonWidth?: InputMaybe<Scalars['String']['input']>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 색상 */
  textColor?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  textSize?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  /** 사이트 연결 */
  connectSite: Scalars['Boolean']['output'];
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 생성 */
  createChild: Scalars['Boolean']['output'];
  /** 컴포넌트 생성 */
  createComponent: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 생성 */
  createMobileChild: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 삭제 */
  deleteChild: Scalars['Boolean']['output'];
  /** 컴포넌트 삭제 */
  deleteComponent: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 삭제 */
  deleteMobileChild: Scalars['Boolean']['output'];
  /** 사이트 연결 해제 */
  disconnectSite: Scalars['Boolean']['output'];
  /** AccessToken 재발급 */
  getNewAccessToken: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['Boolean']['output'];
  /** 로그아웃 */
  logout: Scalars['Boolean']['output'];
  /** 인증코드 발송 */
  sendVerifyCode: Scalars['Boolean']['output'];
  /** 유저 권한 수정 */
  updateAdminRole: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 업데이트 */
  updateChild: Scalars['Boolean']['output'];
  /** 컴포넌트 수정 */
  updateComponent: Scalars['Boolean']['output'];
  /** 푸터 수정 */
  updateFooter: Scalars['Boolean']['output'];
  /** 헤더 수정 */
  updateHeader: Scalars['Boolean']['output'];
  /** 모바일 자식 컴포넌트 업데이트 */
  updateMobileChild: Scalars['Boolean']['output'];
  /** 모바일 푸터 수정 */
  updateMobileFooter: Scalars['Boolean']['output'];
  /** 모바일 헤더 수정 */
  updateMobileHeader: Scalars['Boolean']['output'];
  /** 이미지 업로드 */
  updateProfileImage: Scalars['String']['output'];
  /** 이미지 업로드 */
  uploadImage: Scalars['String']['output'];
  /** 이메일 인증 */
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationConnectSiteArgs = {
  domain: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  componentId: Scalars['Int']['input'];
};


export type MutationCreateComponentArgs = {
  componentType: ComponentType;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
};


export type MutationCreateMobileChildArgs = {
  componentId: Scalars['Int']['input'];
};


export type MutationCreateSiteArgs = {
  domain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteChildArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteComponentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMobileChildArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDisconnectSiteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSendVerifyCodeArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAdminRoleArgs = {
  adminId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationUpdateChildArgs = {
  childStyle?: InputMaybe<ChildStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateComponentArgs = {
  componentMobileStyle?: InputMaybe<ComponentMobileStyleInput>;
  componentStyle?: InputMaybe<ComponentStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  id: Scalars['Int']['input'];
  inquiryStyle?: InputMaybe<InquiryStyleInput>;
  mobileContent?: InputMaybe<Scalars['String']['input']>;
  mobileInquiryStyle?: InputMaybe<MobileInquiryStyleInput>;
  mobileTitle?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  titleStyle?: InputMaybe<TitleStyleInput>;
};


export type MutationUpdateFooterArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  contentBottom?: InputMaybe<Scalars['String']['input']>;
  contentTop?: InputMaybe<Scalars['String']['input']>;
  footerType: Scalars['Int']['input'];
  helpCenter?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  terms?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  gap?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  padding?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMobileChildArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  mobileChildStyle?: InputMaybe<MobileChildStyleInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMobileFooterArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  contentBottom?: InputMaybe<Scalars['String']['input']>;
  contentTop?: InputMaybe<Scalars['String']['input']>;
  footerType: Scalars['Int']['input'];
  helpCenter?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  terms?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMobileHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  button?: InputMaybe<Scalars['String']['input']>;
  buttonSize?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  menuBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  menuPadding?: InputMaybe<Scalars['String']['input']>;
  padding?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProfileImageArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationUploadImageArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String']['input'];
  verifyCode: Scalars['String']['input'];
};

export type Query = {
  /** 관리자 정보 */
  findAdmin: AdminEntity;
  /** 수정내역 목록 조회 */
  findManyHistory: Array<HistoryEntity>;
  /** 관리자 ID로 사이트 목록 조회 */
  findManySite: Array<SiteEntity>;
  /** 도메인으로 사이트 조회 */
  findOneSiteByDomain: SiteEntity;
  /** ID로 사이트 조회 */
  findOneSiteById: SiteEntity;
};


export type QueryFindManyHistoryArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryFindOneSiteByDomainArgs = {
  domain: Scalars['String']['input'];
};


export type QueryFindOneSiteByIdArgs = {
  id: Scalars['Int']['input'];
};

/** 관리자 권한 */
export type RoleEntity = {
  /** 설명 */
  description: Scalars['String']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
};

/** 사이트 */
export type SiteEntity = {
  /** 컴포넌트 목록 */
  components?: Maybe<Array<ComponentEntity>>;
  /** 도메인 */
  domain: Scalars['String']['output'];
  /** 사이트 이메일 */
  email: Scalars['String']['output'];
  /** 푸터 */
  footer?: Maybe<FooterEntity>;
  /** 헤더 */
  header?: Maybe<HeaderEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 모바일 푸터 */
  mobileFooter?: Maybe<MobileFooterEntity>;
  /** 모바일 헤더 */
  mobileHeader?: Maybe<MobileHeaderEntity>;
  /** 이름 */
  name: Scalars['String']['output'];
};

/** 제목 스타일 */
export type TitleStyleEntity = {
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Float']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 색상 */
  mobileColor?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Float']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['String']['output']>;
};

export type TitleStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 색상 */
  mobileColor?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Float']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['String']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['String']['input']>;
};

export type QueryQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type QueryQuery = { findOneSiteByDomain: { id: number, domain: string, name: string, email: string, components?: Array<{ componentType: ComponentType, content?: string | null, id: number, isDelete: boolean, mobileContent?: string | null, mobileTitle?: string | null, name: string, siteId: number, title?: string | null, children?: Array<{ id: number, title?: string | null, content?: string | null, isDelete: boolean, componentId: number, childStyle?: { id: number, width?: string | null, height?: string | null, margin?: string | null, padding?: string | null, background?: string | null, backgroundType?: BackgroundType | null, border?: string | null, borderRadius?: string | null, titleSize?: string | null, titleColor?: string | null, titleLineHeight?: number | null, titleMargin?: string | null, contentSize?: string | null, contentColor?: string | null, contentLineHeight?: number | null, contentMargin?: string | null, childId: number } | null }> | null, componentMobileStyle?: { id: number, height?: string | null, padding?: string | null, grid?: number | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, componentStyle?: { id: number, height?: string | null, padding?: string | null, grid?: number | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, contentStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: string | null, mobileSize?: string | null, lineHeight?: number | null, mobileLineHeight?: number | null, color?: string | null, mobileColor?: string | null, componentId: number } | null, inquiryStyle?: { id: number, padding?: string | null, gap?: string | null, textSize?: string | null, textColor?: string | null, lineHeight?: number | null, backgroundColor?: string | null, buttonWidth?: string | null, buttonHeight?: string | null, buttonTextSize?: string | null, buttonTextColor?: string | null, buttonColor?: string | null, buttonRadius?: string | null, componentId: number } | null, mobileChildren?: Array<{ id: number, title?: string | null, content?: string | null, isDelete: boolean, componentId: number, mobileChildStyle?: { id: number, width?: string | null, height?: string | null, margin?: string | null, padding?: string | null, background?: string | null, backgroundType?: BackgroundType | null, border?: string | null, borderRadius?: string | null, titleSize?: string | null, titleColor?: string | null, titleLineHeight?: number | null, titleMargin?: string | null, contentSize?: string | null, contentColor?: string | null, contentLineHeight?: number | null, contentMargin?: string | null, mobileChildId: number } | null }> | null, mobileInquiryStyle?: { id: number, padding?: string | null, gap?: string | null, textSize?: string | null, textColor?: string | null, lineHeight?: number | null, backgroundColor?: string | null, buttonWidth?: string | null, buttonHeight?: string | null, buttonTextSize?: string | null, buttonTextColor?: string | null, buttonColor?: string | null, buttonRadius?: string | null, componentId: number } | null, titleStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: string | null, mobileSize?: string | null, lineHeight?: number | null, mobileLineHeight?: number | null, color?: string | null, mobileColor?: string | null, componentId: number } | null }> | null, header?: { id: number, logo?: string | null, logoSize?: string | null, height?: string | null, padding?: string | null, gap?: string | null, backgroundColor?: string | null, textSize?: string | null, textColor?: string | null, siteId: number } | null, mobileHeader?: { id: number, logo?: string | null, logoSize?: string | null, button?: string | null, buttonSize?: string | null, height?: string | null, padding?: string | null, menuPadding?: string | null, backgroundColor?: string | null, menuBackgroundColor?: string | null, textSize?: string | null, textColor?: string | null, siteId: number } | null, footer?: { id: number, footerType: number, logo?: string | null, logoSize?: string | null, contentTop?: string | null, helpCenter?: string | null, terms?: string | null, contentBottom?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, textSize?: string | null, textColor?: string | null, lineHeight?: number | null, siteId: number } | null, mobileFooter?: { id: number, footerType: number, logo?: string | null, logoSize?: string | null, contentTop?: string | null, helpCenter?: string | null, terms?: string | null, contentBottom?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, textSize?: string | null, textColor?: string | null, lineHeight?: number | null, siteId: number } | null } };


export const QueryDocument = gql`
    query Query($domain: String!) {
  findOneSiteByDomain(domain: $domain) {
    id
    domain
    name
    email
    components {
      children {
        id
        title
        content
        isDelete
        componentId
        childStyle {
          id
          width
          height
          margin
          padding
          background
          backgroundType
          border
          borderRadius
          titleSize
          titleColor
          titleLineHeight
          titleMargin
          contentSize
          contentColor
          contentLineHeight
          contentMargin
          childId
        }
      }
      componentMobileStyle {
        id
        height
        padding
        grid
        gap
        background
        backgroundType
        componentId
      }
      componentStyle {
        id
        height
        padding
        grid
        gap
        background
        backgroundType
        componentId
      }
      componentType
      content
      contentStyle {
        id
        margin
        mobileMargin
        size
        mobileSize
        lineHeight
        mobileLineHeight
        color
        mobileColor
        componentId
      }
      id
      inquiryStyle {
        id
        padding
        gap
        textSize
        textColor
        lineHeight
        backgroundColor
        buttonWidth
        buttonHeight
        buttonTextSize
        buttonTextColor
        buttonColor
        buttonRadius
        componentId
      }
      isDelete
      mobileChildren {
        id
        title
        content
        isDelete
        componentId
        mobileChildStyle {
          id
          width
          height
          margin
          padding
          background
          backgroundType
          border
          borderRadius
          titleSize
          titleColor
          titleLineHeight
          titleMargin
          contentSize
          contentColor
          contentLineHeight
          contentMargin
          mobileChildId
        }
      }
      mobileContent
      mobileInquiryStyle {
        id
        padding
        gap
        textSize
        textColor
        lineHeight
        backgroundColor
        buttonWidth
        buttonHeight
        buttonTextSize
        buttonTextColor
        buttonColor
        buttonRadius
        componentId
      }
      mobileTitle
      name
      siteId
      title
      titleStyle {
        id
        margin
        mobileMargin
        size
        mobileSize
        lineHeight
        mobileLineHeight
        color
        mobileColor
        componentId
      }
    }
    header {
      id
      logo
      logoSize
      height
      padding
      gap
      backgroundColor
      textSize
      textColor
      siteId
    }
    mobileHeader {
      id
      logo
      logoSize
      button
      buttonSize
      height
      padding
      menuPadding
      backgroundColor
      menuBackgroundColor
      textSize
      textColor
      siteId
    }
    footer {
      id
      footerType
      logo
      logoSize
      contentTop
      helpCenter
      terms
      contentBottom
      backgroundColor
      paddingTop
      paddingBottom
      textSize
      textColor
      lineHeight
      siteId
    }
    mobileFooter {
      id
      footerType
      logo
      logoSize
      contentTop
      helpCenter
      terms
      contentBottom
      backgroundColor
      paddingTop
      paddingBottom
      textSize
      textColor
      lineHeight
      siteId
    }
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      domain: // value for 'domain'
 *   },
 * });
 */
export function useQueryQuery(baseOptions: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables> & ({ variables: QueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export function useQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;