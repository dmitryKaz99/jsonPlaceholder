import Head from "next/head";
import MyLink from "./MyLink";
import { routesConfig } from "../common/routes";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { FC } from "react";

interface IMyNavigation {
  banner: string;
  title: string;
}

const MyNavigation: FC<IMyNavigation> = ({ banner, title, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{banner}</title>
      </Head>

      <div className="pb-4">
        <Navbar
          bg="light"
          style={{ height: "80px" }}
          className="fixed-top shadow-sm"
        >
          <Container>
            <div className="fs-4">
              <MyLink href={"/"} text={"Поиск"} router={router} />
            </div>

            <Nav className="me-auto flex-wrap">
              {routesConfig.map((r) => (
                <MyLink
                  key={r.path}
                  href={r.path}
                  text={r.text}
                  router={router}
                />
              ))}
            </Nav>
          </Container>
        </Navbar>
      </div>

      <Container className="d-flex justify-content-center flex-column my-5">
        <h1 className="text-center my-5">{title}</h1>
        {children}
      </Container>
    </>
  );
};

export default MyNavigation;
