import React from "react";
import { getClient } from "@/config/client";
import { FIND_ONE_SITE_BY_DOMAIN } from "@/graphql/query";
import { Container } from "@/components/Container";
import { headers } from "next/headers";
import Screen from "./Screen";

export default async function Home() {
  const client = getClient();

  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host");

  const url = `${protocol}://${host}`;

  let data;
  let error;

  try {
    const response = await client.query({
      query: FIND_ONE_SITE_BY_DOMAIN,
      variables: {
        domain: url,
      },
      fetchPolicy: "network-only",
    });

    data = response.data;
  } catch (err) {
    error = err;
  }

  return (
    <>
      {error ? <div>존재하지 않는 페이지 입니다.</div> : <Screen data={data.findOneSiteByDomain} />}
    </>
  );
}
