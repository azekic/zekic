import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { PageWrapper } from "./PageWrapper";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const errorMessage =
    isRouteErrorResponse(error) && error.status === 404
      ? "Page not found"
      : "An unexpected error has occurred";
  return (
    <PageWrapper>
      <Heading m="2" textAlign="center">
        {errorMessage}
      </Heading>
    </PageWrapper>
  );
}
