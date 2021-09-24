import { Navbar } from "../../components/Navbar";
import { Link as ScrollLink } from 'react-scroll';
import { ShorterNavbar } from "../../components/ShorterNavbar";
import styles from './PrivacyTerms.module.css';
import { AiFillCaretRight } from "react-icons/ai";
import { RiChatPrivateFill } from 'react-icons/ri';
import ReactMarkdown from "react-markdown";
import React from "react";
import Head from 'next/head';
import { TermsSection } from '../../components/TermsSection';
import Terms from '../../data/privacy-terms.json';

export default function PrivacyTerms() {
  function scrollInto(parentId: string, targetId: string) : void | null {
    const parent = document.getElementById(parentId);

    if (!parent) return;
    const target = document.getElementById(targetId);

    if (!target) return;

    parent.scrollTo({top: target.scrollHeight, behavior: 'smooth'});
}
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Privacy & Terms | RadarBot
        </title>
      </Head>
      <ShorterNavbar />
      <div className={styles.content}>
        <div className={styles.side}>
          <nav className={styles.scrollMenu}>
            {
              Terms.map((item: any) => (

                <ScrollLink offset={-1000} activeClass={styles.activenav} spy={true} smooth key={item.id} className={styles.itemMenu} to={item.id}>
                  <AiFillCaretRight />
                  <span>{`${item.number}. ${item.title}`}</span>
                </ScrollLink>

              ))
            }

          </nav>
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.headertitle}>
              <strong>Privacy Terms of RadarBot</strong>
            </div>
            <div className={styles.headerdescription}>
              <p>
                We always be carrefuly and want to provide best security and privacy to you.
              </p>
            </div>
          </div>
          <div className={styles.intro} id="intro">
            <title className={styles.introtitle}>
              These terms govern the use of this bot, and any other related agreement or legal relationship with the owner in a legally binding manner.
              <span>
                The user should read this document carefully.
              </span>
            </title>
            <div className={styles.introdescription}>
              <strong>This bot was developed by::</strong>
              <span>André Felipe Brito (afbb#0987)</span>
              <span>Contact e-mail of owner: andrefbrito16@gmail.com</span>
            </div>
          </div>
          <div id="terms" className={styles.terms}>
            {
              Terms.map((item: any) => (
                <TermsSection
                  key={item.title}
                  id={item.id}
                  titleContent={item.title}
                  paragraph={item.paragraph}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}