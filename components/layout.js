import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styled from "styled-components";

const name = "youngji";
export const siteTitle = "영지의 개발블로그";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav>
        <Link href="/">youngji.dev</Link>
      </Nav>
      <ProfileWrapper>
        {home && (
          <>
            <img
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              alt={name}
            />
            <div>
              <h1>{name}</h1>
              <h2>Frontend Developer</h2>
            </div>
          </>
        )}
      </ProfileWrapper>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
  height: 60px;
  font-size: 30px;
  a {
    font-weight: 800;
    text-decoration: none;
  }
`;

const ProfileWrapper = styled.header`
  display: flex;
  align-items: center;
  margin: 30px 30px;
  font-size: 15px;
  img {
    width: 120px;
    height: 120px;
    margin-right: 30px;
  }
`;
