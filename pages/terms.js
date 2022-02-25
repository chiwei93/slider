import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/header/header';
import Container from '../components/container/container';

import styles from '../styles/Terms.module.css';

const Terms = () => {
  return (
    <Container>
      <Header />

      <h1 className={`${styles.center} ${styles.heading}`}>
        Terms & Conditions
      </h1>

      <div className={styles.listContainer}>
        <ol className={styles.list}>
          <li>
            The &apos;Spin the Wheel&apos; game and Prize Draw(&#8220;Promotion&#8221;) is open to all delegates who perform transaction with Atome attending to the 6IXTY8IGHT at Lalaport, Kuala Lumpur between 10am and 10pm (local MY time) from 27th February 2022 to 8th March 2022.
          </li>
          <li>
            Only one entry per person is permitted and all entrants must be aged
            18 years and above.
          </li>
          <li>
            All entrants, in order to be eligible to enter the Promotion must
            show their Atome&apos;s transaction to the BA who manage the Digital
            Screen engagement located at the activation designated booth/stall.
          </li>
          <li>The Promotion is with T&C applied.</li>
          <li>
            Players of the Spin the Wheel Game following their spin of the
            Wheel, have a chance to win a prize if the spinner stops spinning
            and lands on the segment of the Wheel indicating they are eligible
            to win a prize. Players will win the prize corresponding to the
            prize stated on that segment on the Wheel. There will be
            approximately 200 prizes in total and available to win, throughout
            the duration of the event for 10 days.
          </li>
          <li>
            All prizes for all winners are non-exchangeable, non-transferable
            and no cash alternative is offered and while stocks last.
          </li>
          <li>
            The decision of the BA regarding any aspect of the Promotion is
            final and binding and no correspondence will be entered into about
            it.
          </li>
          <li>
            Participants are deemed to have accepted and agreed to be bound by
            these terms and conditions upon entry and the Atome&apos;s BA reserves the right
            to amend these terms and conditions at any time.
          </li>
          <li>
            Atome&apos;s BA reserves the right to refuse entry, or refuse to award any of
            the prizes to anyone in breach of these terms and conditions.
          </li>
          <li>
            Atome&apos;s BA reserves the right to hold void, cancel, suspend, or amend
            the promotion where it becomes necessary to do so.
          </li>
          <li>
            Atome&apos;s BA accepts no responsibility for entries not successfully
            completed due to a technical fault technical malfunction, computer
            hardware or software failure, satellite, network or server failure
            of any kind whatsoever.
          </li>
          <li>
            Personal data supplied during the course of this promotion will only
            be processed as set out in the Promoter&apos;s Privacy Policy.
          </li>
        </ol>
      </div>

      <div className={styles.btnContainer}>
        <Link href="/game">
          <a className={styles.btnLink}>
            <Image src="/images/agree.png" alt="agree button" layout="fill" />
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Terms;
