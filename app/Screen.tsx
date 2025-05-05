"use client";

import { Container } from "@/components/Container";
import { MobileContainer } from "@/components/MobileContainer";
import { SiteEntity } from "@/graphql/generated/types";
import useResizeHandler from "@/hooks/useResizeHandler";

interface Props {
  data?: SiteEntity;
}

export default function Screen({ data }: Props) {
  const { isMobile } = useResizeHandler();

  return <>{isMobile ? <MobileContainer data={data} /> : <Container data={data} />}</>;
}
