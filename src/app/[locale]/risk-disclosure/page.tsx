// app/risk-disclosure/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  AlertTriangle,
  Shield,
  Lock,
  Globe,
  Cpu,
  Key,
  Scale,
  Handshake,
  FileText,
  Mail,
  Percent,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RiskDisclosurePage = () => {
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-16">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            {/* <AlertTriangle className="w-10 h-10 text-elf-green" /> */}
            <div>
              <h2 className="md:text-3xl text-xl font-bold text-white mb-8 pl-6 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm"></span>
                Risk Disclosure Statement
              </h2>

              <p className="text-lg opacity-90 mt-1">
                Direct Honest Safe International Exchange FZE
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Section I */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>I. General risks</span>
            </h2>
            <p className="mb-6">
              This Risk Disclosure Statement outlines a non-exhaustive list of
              risks which may be associated with the Services we offer, relating
              in particular to entering into Transactions. In this Risk
              Disclosure Statement, references to "DHS" or "we", "us" or "our"
              means DIRECT HONEST SAFE INTERNATIONAL EXCHANGE FZE Virtual Assets
              L.L.C.
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <p className="font-medium">
                This Risk Disclosure Statement does not set out all risks
                arising in relation to the Investments and Services we may
                offer, and should not be relied upon as doing so. The risks
                applicable to any particular Investment or Service will depend
                on your particular circumstances and the terms of the relevant
                transaction.
              </p>
            </div>
            <p className="mb-6">
              You should not deal in any Investment unless you understand the
              nature of the product you are dealing in (or a contract you are
              entering into), the extent of your exposure to risk, and unless
              you are satisfied that the product is appropriate for you.
            </p>
            <p className="mb-6 font-medium">
              You should consider carefully whether or not any product is
              suitable for you in light of your circumstances and financial
              position, and if in any doubt, seek professional advice.
            </p>
            <p className="mb-6">
              All financial products involve a degree of risk, and even
              strategies considered low-risk carry inherent uncertainty.
              Investment prices can fluctuate, and there is a possibility that
              you may lose some or all of your invested capital. In certain
              circumstances, losses may exceed the amount of your original
              investment.
            </p>
            <p className="mb-6">
              The specific risks associated with any financial product depend on
              multiple factors, including the nature of the asset and the
              circumstances of the parties involved. Investment risk varies
              according to the type of investment, the level of diversification
              or concentration within a portfolio, and the complexity of the
              transaction.
            </p>
            <p className="mb-6">
              The value of an investment is influenced by fluctuations in
              financial markets and current market conditions. Past performance,
              simulated past performance, or forecasts are not reliable
              indicators of future results.
            </p>
            <p className="mb-6">
              Potential risks that may impact your investment include, but are
              not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Liquidity risk</li>
              <li>
                Market risk (including volatility and adverse market conditions)
              </li>
              <li>Settlement risk</li>
              <li>Currency risk</li>
              <li>Credit risk</li>
              <li>Operational risk</li>
              <li>Business risk</li>
              <li>Tax risk</li>
              <li>Regulatory risk</li>
              <li>Legal risk</li>
              <li>Restrictions or barriers to divestment</li>
              <li>Risks inherent in over-the-counter (OTC) trading</li>
              <li>
                Risks arising from any additional obligations you may assume
                related to the investment
              </li>
            </ul>
            <p className="mb-6">
              These risks may occur simultaneously and unpredictably affect the
              value of your investment. This Risk Disclosure Statement does not
              cover all possible risks. You should carefully consider all
              additional information provided to you in connection with your
              investment to fully understand your exposure.
            </p>
            <p className="mb-6">
              Risks arising generally in relation to Investments include:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    a. Risk relating to market conditions
                  </h4>
                  <p>
                    The price of an Investment and its disinvestment risk may
                    each be affected by factors relating to wider market
                    conditions, both positive and negative, and such market
                    conditions will affect each Investment differently.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">b. Disinvestment risk</h4>
                  <p>
                    Investments may be affected by impediments to disinvestment,
                    (e.g., Investments may prove illiquid or difficult to sell
                    and/or may be difficult to sell at a price equal to or
                    greater than the transaction price at the point in time that
                    you wish to sell).
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section II */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>II. Over-the-counter transactions</span>
            </h2>
            <p className="mb-6">
              The transactions you enter into with us will be executed on
              regulated exchanges. On-exchange transactions occur within a
              centralized marketplace that provides transparency, standardized
              contract terms, and regulatory oversight. This structure typically
              offers greater liquidity compared to over-the-counter (OTC)
              markets, facilitating the efficient execution and timely
              settlement of trades.
            </p>
            <p className="mb-6">
              Due to the presence of multiple market participants, bid and offer
              prices are continuously quoted and determined by supply and demand
              dynamics in a competitive environment. This transparency aids in
              establishing fair market prices and provides investors with
              greater confidence in price discovery. However, despite the
              benefits of on-exchange trading, all investments carry inherent
              risks. Market prices can be volatile, and liquidity may fluctuate
              depending on market conditions, which can affect the ability to
              enter or exit positions at desired prices. Additionally, while
              exchanges provide mechanisms to close out positions, certain
              extraordinary market events may impact liquidity or pricing.
            </p>
            <p className="mb-6">
              Investors should be aware that on-exchange trading is subject to
              regulatory requirements and exchange rules, which are designed to
              promote market integrity and investor protection. Nevertheless, it
              remains essential to carefully consider the risks associated with
              trading financial instruments, including price fluctuations and
              the potential for losses.
            </p>
          </motion.section>

          {/* Section III */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>III. Default and termination</span>
            </h2>
            <p className="mb-6">
              If any Event of Default occurs in relation to you, or at any time
              after we have determined, in our sole and absolute discretion,
              that you have not performed (or we reasonably believe that you
              will not be able or willing in the future to perform) any of your
              obligations to us, we shall be entitled without prior notice to
              you (i) to close out, terminate, accelerate, cancel, replace or
              reverse any Transaction, buy, sell, borrow or lend any Investment
              or enter into any other Transaction or take, or refrain from
              taking, such other action at such time or times and in such manner
              as we consider (at our discretion) necessary or appropriate to
              cover, reduce or eliminate our loss or liability under or in
              respect of any of your Transactions, contracts, positions or
              commitments, including refraining from delivering any Investments
              due to you and/or (ii) terminate any Transaction and to terminate
              the Terms of Business immediately. A termination may involve the
              payment of a Termination Amount from you, which may be netted
              and/or set-off against other payment obligations due between us
              and you.
            </p>
          </motion.section>

          {/* Section IV */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>IV. Disruption Events</span>
            </h2>
            <p className="mb-6">
              If a Disruption Event occurs we may, in our sole and absolute
              discretion, make such changes, conversions, adjustments or
              modifications to the exercise, settlement, payment or any other
              terms of such Transaction as we determine to be appropriate (which
              may include cancelling any relevant Transaction and calculating
              any payment due to or from you based on the closing prices we
              reasonably deem to be appropriate). We make no assurances in
              relation to the nature of any adjustments we decide to make.
            </p>
          </motion.section>

          {/* Section V */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>V. Collateral</span>
            </h2>
            <p className="mb-6">
              You may be required to transfer Collateral to us on demand, in
              such amounts and types as we may require in our absolute
              discretion, which may be in the form of cash or Digital Assets as
              specified by us prior to the entry into a Transaction and from
              time to time during the term of a Transaction. Collateral may be
              required in relation to any Transaction, whether entered under the
              Terms of Business or any Trading Agreement.
            </p>
            <p className="mb-6">
              We reserve the right to vary the amount and type of Collateral
              required at our sole and absolute discretion. You are responsible
              for ensuring arrangements are in place to deal at all times with
              calls for further and/or replacement Collateral to be transferred,
              including sourcing Collateral of the type we require to be
              delivered (in the event you do not already hold such Collateral at
              the relevant time).
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <p className="font-medium">
                Any Collateral which is paid or delivered to us will be by way
                of outright transfer of ownership and will not be held by us in
                an account on your behalf and our only obligation to you in
                relation to such Collateral will be a contractual obligation to
                return an equivalent amount or asset if we decide such
                Collateral is no longer required. As such, you will not enjoy
                the same protections in relation to the Collateral that you
                would otherwise have enjoyed had the Collateral been placed in
                an account held with a third party. This creates the risk that,
                in the event we were subject to insolvency proceedings, you may
                not recover some or all of any Collateral that we were due to
                return to you.
              </p>
            </div>
            <p className="mb-6">
              Allowing for only the partial collateralisation of a position (for
              example, in relation to contracts for difference) creates leverage
              and this can work for you or against you. A small price movement
              in your favour can result in a high return on the Collateral
              transferred to us in relation to the contract for difference but
              conversely a small price movement against you may result in
              substantial losses.
            </p>
          </motion.section>

          {/* Section VI */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>VI. Foreign currency risks</span>
            </h2>
            <p className="mb-6">
              Entering into transactions involving foreign exchange exposes you
              to the risk of adverse fluctuations in currency exchange rates.
              Foreign currency exchange rates can be highly volatile and are
              influenced by a wide range of economic, political, and social
              factors relating to the countries whose currencies are being
              traded. Changes in exchange rates can have either a positive or
              negative impact on the gains or losses resulting from such
              transactions. The profit or loss on foreign currency-denominated
              contracts—whether traded domestically or internationally—may be
              affected by currency conversion requirements, depending on the
              nature of the instrument and the currencies involved. By engaging
              in foreign exchange transactions, you assume the risk that
              exchange rates may change significantly, including in cases of
              currency devaluation. Additionally, the relevant governmental or
              monetary authorities may impose or modify exchange controls or
              restrictions that could adversely affect currency values and your
              ability to convert or repatriate funds. It is important to
              recognize that exchange controls have been imposed historically by
              certain authorities and may be reinstated or changed in the
              future, potentially impacting your investment and exposure to
              foreign exchange risk.
            </p>
          </motion.section>

          {/* Section VII - Digital Assets Risks (Complete) */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>VII. Digital Assets risks</span>
            </h2>

            <div className="space-y-8">
              {/* Subsection a */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  a. The nascent nature of Digital Assets
                </h3>
                <p className="mb-4">
                  Digital Assets are a new and evolving asset class and are part
                  of a new and rapidly evolving industry that is subject to a
                  high degree of uncertainty. The characteristics of particular
                  Digital Assets within the "class" may differ significantly,
                  and the investment characteristics of Digital Assets as an
                  asset class differ from those of traditional currencies,
                  securities and commodities. Digital Assets present a
                  constantly changing environment in which the associated risks
                  are also constantly changing. Accordingly, the risks described
                  herein, which may become outdated, are only a brief summary of
                  certain aspects of the risks associated with investing in
                  Digital Assets and are not exhaustive.
                </p>
              </div>

              {/* Subsection b */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  b. Price volatility
                </h3>
                <p className="mb-4">
                  The price of a Digital Asset is fundamentally determined by
                  the market's perception of its value and is highly susceptible
                  to changes in investor sentiment, making these assets
                  potentially very volatile. You should be aware that Digital
                  Assets can experience rapid and substantial price
                  fluctuations, which may lead to significant losses—including
                  the complete loss of your investment and, in some cases,
                  losses exceeding the initial value invested. Unlike
                  traditional currencies or financial instruments, most Digital
                  Assets are not backed by a central bank, governmental entity,
                  international organization, physical assets, or other forms of
                  credit, although certain Digital Assets may have limited
                  backing by tangible assets. Many Digital Assets lack inherent
                  value; their prices depend largely on the confidence and
                  demand of market participants. Consequently, any shift in
                  investor confidence can materially affect their valuation.
                  Digital Assets may also exhibit momentum pricing driven by
                  speculative expectations of future price appreciation. This
                  phenomenon, common in growth stocks and similar assets,
                  reflects valuations based on anticipated future gains.
                  Speculation fueled by momentum pricing can amplify volatility
                  in Digital Asset markets, causing prices to fluctuate more
                  dramatically in response to changing investor sentiment. As a
                  result, Digital Assets carry a heightened risk of price
                  instability, and investors should be prepared for significant
                  and sudden changes in value that may affect both short-term
                  and long-term investment outcomes.
                </p>
              </div>

              {/* Subsection c */}
              <div>
                <h3 className="text-xl font-medium mb-4">c. Valuation</h3>
                <p className="mb-4">
                  It may prove difficult to determine the value of a given
                  Digital Asset from time to time, due to price volatility and
                  the fragmentation of the Digital Asset markets. Published
                  Digital Asset prices may deviate significantly between
                  different exchanges and other market venues as a result of
                  liquidity imbalances, and weighted average prices may not
                  provide an accurate representation of value. We do not
                  guarantee that the price we provide in respect of any Digital
                  Asset will be better than the price available from another
                  exchange or market venue.
                </p>
              </div>

              {/* Subsection d */}
              <div>
                <h3 className="text-xl font-medium mb-4">d. Liquidity</h3>
                <p className="mb-4">
                  Liquidity risk exists when particular investments are
                  difficult to purchase or sell, possibly preventing you from
                  selling out of these illiquid investments at an advantageous
                  price, or at all. Thin markets can also amplify volatility and
                  cause significant delays in executing trades. Any markets for
                  these investments can be expected to involve wider price
                  spreads and more sensitivity to buying and selling pressures
                  than is found in more active markets. Illiquidity can be
                  caused by various factors, including but not limited to market
                  conditions, regulatory actions, technological issues, or other
                  unforeseen circumstances. Illiquidity may impact the ability
                  to open or close positions, leading to potential losses or
                  delays in accessing funds.
                </p>
                <p className="mb-4">
                  Digital Assets may be illiquid investments that are not easily
                  and readily convertible into flat currencies, and some Digital
                  Asset markets may be thinner than others.
                </p>
              </div>

              {/* Subsection e */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  e. Cybersecurity and malicious activity
                </h3>
                <p className="mb-4">
                  Digital Assets carry heightened cybersecurity risks compared
                  to many other asset classes. These risks extend to associated
                  digital wallets, spot exchanges, and the underlying blockchain
                  technology, including vulnerabilities to hacking and the
                  potential that publicly distributed ledgers may not be fully
                  immutable.
                </p>
                <p className="mb-4">
                  A cybersecurity incident—whether a major breach or a minor
                  event—could lead to immediate, substantial, and irreversible
                  losses for market participants, including you and your Digital
                  Asset holdings. Even smaller cybersecurity events are likely
                  to exert downward pressure on the affected Digital Asset's
                  price and may also negatively influence the prices of other
                  Digital Assets.
                </p>
                <p className="mb-4">
                  Digital Assets are also susceptible to fraud, manipulation,
                  and theft, which occur not only through hacking but via
                  various targeted schemes and fraudulent activities. In many
                  cases, legal protections available for traditional assets may
                  be limited or unavailable in these circumstances.
                </p>
                <p className="mb-4">
                  Further risks may arise from the design or operation of smart
                  contracts and decentralized finance ("DeFi") applications.
                  Such risks include vulnerabilities that do not necessarily
                  stem from bugs or flaws but from structural features of these
                  contracts or applications. Exploitation of these features
                  within DeFi environments can trigger complex, second-order
                  effects that may significantly diminish the value of the
                  Digital Assets native to the affected blockchain networks.
                </p>
                <p className="mb-4">
                  The realization of any of these cybersecurity risks could
                  result in significant financial loss, increased market
                  volatility, and other adverse consequences that may negatively
                  impact your investment and interests in Digital Assets.
                </p>
                <p className="mb-4">
                  Similarly, Digital Asset networks, platforms and exchanges may
                  be subject to attack by malicious persons, entities or
                  malware. For instance, a malicious actor or group of actors
                  could obtain a majority of the processing or 'hash' power on a
                  particular Digital Asset network, and could implement
                  modifications to the network in a way that is detrimental to
                  the liquidity or value of the Digital Asset (commonly referred
                  to as a '51% attack'), such as preventing transactions from
                  posting accurately on the blockchain, or at all, and/or
                  allowing certain coins to be spent more than once. To the
                  extent that such malicious person(s) does not yield its
                  majority control of the processing power on the network,
                  reversing any changes made to the source code or blockchain
                  may not be possible. Malicious activities such as these may
                  reduce confidence in Digital Assets and result in greater
                  price volatility and could adversely affect your investment in
                  Digital Assets.
                </p>
              </div>

              {/* Subsection f */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  f. Development and maintenance of Digital Assets networks
                </h3>
                <p className="mb-4">
                  Several Digital Assets networks operate on an open-source
                  protocol maintained by a group of uncompensated volunteer
                  developers. Consequently, there may be a lack of financial
                  incentive for developers to maintain or develop the network,
                  and the developers may lack the resources to adequately
                  address emerging issues with the relevant Digital Asset
                  protocol. There can be no assurance that the core developers
                  of a Digital Asset network will continue to be involved in the
                  network, or that new volunteer developers will emerge to
                  replace them. To the extent that material issues arise with a
                  Digital Asset protocol and the developers are unable or
                  unwilling to address the issues adequately or in a timely
                  manner, the Digital Asset may diminish in value or become
                  worthless.
                </p>
                <p className="mb-4">
                  In addition, several Digital Assets rely on decentralised
                  participants to operate the Digital Asset network through
                  verifying transactions in Digital Assets on an ongoing basis.
                  The failure of decentralised participants to continue to
                  maintain a network by verifying Digital Asset transactions may
                  result in the relevant Digital Asset losing value or becoming
                  worthless.
                </p>
              </div>

              {/* Subsection g */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  g. Risks of 'proof of stake' consensus mechanisms
                </h3>
                <p className="mb-4">
                  Certain Digital Assets rely in whole or in part on a "proof of
                  stake" method of generating a distributed consensus. Proof of
                  stake algorithms do not rely on resource intensive
                  calculations to validate transactions and create new blocks in
                  a blockchain; instead, the validator of the next block is
                  determined by reference to the amount of Digital Assets a user
                  has "staked" and the amount of time it has been "staked,"
                  which generates payments to such user in additional Digital
                  Assets. While the advantage of a "proof of stake" system is
                  that it is far less energy intensive than a "proof of work"
                  system, this may result in lower barriers for entry, which may
                  allow for increased participation by malicious actors with
                  small stakes that attempt to manipulate the blockchain or
                  increase the risk that the Digital Asset will experience one
                  or more forks, which could impact its value.
                </p>
                <p className="mb-4">
                  Founders of Digital Assets or Digital Asset networks may
                  retain large amounts of the generated Digital Asset, which
                  large positions may result in such founders having an
                  effective veto or ability to control the Digital Asset or its
                  associated blockchain network. As returns associated with
                  staking are connected to the amount of the wealth staked,
                  "proof of stake" systems may encourage hoarding of the Digital
                  Asset. While there are advantages to having users "buy in" to
                  a Digital Asset and support its development, excessive
                  hoarding reduces the "decentralised" nature of verification of
                  the blockchain and may impair the spread of such Digital
                  Asset, including interfering with the widespread adoption of
                  such Digital Assets for use in transactions.
                </p>
              </div>

              {/* Subsection h */}
              <div>
                <h3 className="text-xl font-medium mb-4">h. Opaque market</h3>
                <p className="mb-4">
                  Digital Asset balances are generally maintained as an address
                  on the blockchain and are accessed through private keys, which
                  may be held by a market participant or a custodian. Although
                  Digital Asset transactions are not typically private and are
                  publicly available on a blockchain or distributed ledger, the
                  public address does not identify the controller, owner or
                  holder of the private key. Unlike bank and brokerage accounts,
                  Digital Asset exchanges and custodians that hold Digital
                  Assets do not always identify the owner. The opaque underlying
                  or spot market may pose asset verification challenges for
                  market participants, regulators and auditors and potentially
                  give rise to an increased risk of manipulation and fraud.
                </p>
              </div>

              {/* Subsection i */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  i. Legality of Digital Assets
                </h3>
                <p className="mb-4">
                  It may be illegal, now or in the future, to own, hold, sell or
                  use Digital Assets in one or more countries. Although
                  currently most Digital Assets are not regulated or are lightly
                  regulated in most countries, one or more countries may take
                  regulatory actions in the future that severely restrict the
                  right to acquire, own, hold, sell or use Digital Assets or to
                  exchange Digital Assets for flat currency. Such actions may
                  restrict your ability to hold or trade Digital Assets
                  (directly or indirectly).
                </p>
              </div>

              {/* Subsection j */}
              <div>
                <h3 className="text-xl font-medium mb-4">j. 24/7 markets</h3>
                <p className="mb-4">
                  Unlike traditional securities exchanges, which operate within
                  fixed trading hours, Digital Assets can be traded
                  continuously—24 hours a day, 7 days a week—provided the
                  underlying network remains operational. Most Digital Asset
                  networks maintain near-constant availability and are supported
                  by global cryptocurrency exchanges that operate without
                  interruption.
                </p>
                <p className="mb-4">
                  Consequently, Digital Asset investments are subject to market
                  fluctuations at all times. This continuous trading environment
                  may create situations where rapid market movements occur
                  outside of regular business hours, potentially limiting your
                  ability to respond promptly to changing conditions.
                </p>
              </div>

              {/* Subsection k */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  k. Digital asset exchanges, intermediaries and custodians
                </h3>
                <p className="mb-4">
                  Digital asset exchanges are relatively new and largely
                  unregulated in many jurisdictions. The opaque underlying spot
                  market and lack of regulatory oversight potentially creates a
                  risk that a digital asset exchange may not hold sufficient
                  digital assets and funds to satisfy its obligations to its
                  customers and that such deficiency may not be easily
                  identified or discovered. Many digital asset exchanges have
                  experienced significant outages, downtime and transaction
                  processing delays and may have a higher level of operational
                  risk than regulated futures or securities exchanges. The same
                  sorts of risks apply to other intermediaries, custodians and
                  vendors used to facilitate digital assets transactions. This
                  poses risks to the customers of such digital assets exchanges,
                  intermediaries, custodians and vendors and may have adverse
                  consequences for the Digital Assets that are the subject of
                  any Transaction, and the digital assets markets more
                  generally.
                </p>
              </div>

              {/* Subsection l */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  l. Custody and security risks
                </h3>
                <p className="mb-4">
                  Customers who utilize third-party service providers for
                  digital asset custody, trading, lending, staking, or other
                  purposes may not have direct control over the digital assets
                  held through such providers. The obligations and arrangements
                  involved in safeguarding digital assets present unique risks
                  and uncertainties that differ significantly from those
                  associated with traditional asset custody.
                </p>
                <p className="mb-4">
                  Due to the unique characteristics of digital assets and the
                  relative absence of well-established legal precedents,
                  considerable legal uncertainties persist regarding the
                  treatment of custodial arrangements in judicial proceedings
                  arising from adverse events such as fraud, theft, loss, or
                  bankruptcy. Furthermore, unlike traditional asset custody
                  frameworks, regulatory oversight and compliance requirements
                  for digital asset custodians are often limited, evolving, or
                  inconsistently enforced. As a result, certain custodial
                  entities may not fully adhere to applicable regulatory
                  standards, thereby increasing the risks borne by customers.
                </p>
                <p className="mb-4">
                  Contractual terms with digital asset custodians—especially
                  regarding liability—may be less favorable than those typically
                  negotiated in respect of traditional asset custody. In
                  disputes under such agreements, customers may find themselves
                  in a weaker position compared to traditional custody
                  arrangements.
                </p>
                <p className="mb-4">
                  Additionally, the financial institutions, exchanges, or other
                  third-party custodians may become insolvent, potentially
                  resulting in partial or total loss of the digital assets held
                  on behalf of customers. In bankruptcy scenarios, digital
                  assets held by third-party service providers might be deemed
                  part of the bankruptcy estate, which could result in customers
                  being classified as general unsecured creditors, thereby
                  jeopardizing recovery of their assets.
                </p>
                <p className="mb-4">
                  The aforementioned risks may apply to you to the extent you
                  engage third-party service providers in relation to digital
                  asset custody, trading, lending, staking or other purposes,
                  and could potentially lead to substantial losses (that we are
                  not responsible for). They may also pose indirect risks, as we
                  may rely on third-party service providers in relation to
                  Digital Assets and/or Transactions from time to time.
                </p>
              </div>

              {/* Subsection m */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  m. Loss or destruction of private keys
                </h3>
                <p className="mb-4">
                  Digital Assets are generally only controllable by the
                  possessor of the unique private key or keys relating to the
                  wallet in which the Digital Asset is held. These keys are
                  typically created by and stored within software known as a
                  "digital wallet." While each Digital Asset network may require
                  a public key be published when used in a transaction, any
                  private keys linked with such public key must be safeguarded
                  and kept private in order to prevent a third party from
                  accessing the Digital Asset held in a digital wallet. To the
                  extent a private key is lost, destroyed or otherwise
                  compromised and no backup of the private key is accessible,
                  you (or any custodian acting on your behalf) will be unable to
                  access the Digital Assets held in the related wallet and, in
                  most cases, the private key will not be capable of being
                  restored. The loss or destruction of a private key required to
                  access a Digital Asset may be irreversible. Any loss of
                  private keys relating to Digital Assets could lead to
                  substantial losses. The risk of loss due to losses of private
                  keys or similar methodologies of secure access is generally
                  greater for Digital Assets than that of other asset classes,
                  given the variations in the sophistication of access
                  methodologies and the inherent technological designs of
                  Digital Assets.
                </p>
              </div>

              {/* Subsection n */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  n. Risks in respect of blockchain technology
                </h3>
                <p className="mb-4">
                  Digital Assets and Digital Asset networks typically involve
                  cryptographic and other algorithmic protocols governing the
                  issuance of Digital Assets that represent a new and rapidly
                  evolving industry that is subject to a variety of factors that
                  are difficult to evaluate. As Digital Asset networks continue
                  to develop and grow, certain technical issues might be
                  uncovered and the troubleshooting and resolution of such
                  issues will likely require the attention and efforts of
                  decentralised development communities. Moreover, in the past,
                  flaws in the source code for Digital Asset networks have been
                  exposed and exploited, including flaws that disabled some
                  functionality for users, exposed users' personal information
                  and/or resulted in the theft of users' Digital Assets. The
                  cryptography underlying Digital Assets could prove to be
                  flawed or ineffective, or developments in mathematics and/or
                  technology, including advances in digital computing, algebraic
                  geometry and quantum computing, could result in such
                  cryptography becoming ineffective. In any of these
                  circumstances, a malicious actor may be able to misappropriate
                  your Digital Assets. Moreover, functionality of Digital Asset
                  networks may be negatively affected such that it is no longer
                  attractive to users, thereby reducing demand for the relevant
                  Digital Asset.
                </p>
                <p className="mb-4">
                  Even if only a particular Digital Asset was affected by such
                  circumstances, any reduction in confidence in the source code
                  or cryptography underlying Digital Assets generally could
                  negatively affect the demand for Digital Assets.
                </p>
              </div>

              {/* Subsection o */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  o. Uneven protocol adoption and forking
                </h3>
                <p className="mb-4">
                  Often, there is no official developer or group of developers
                  that formally controls a given Digital Asset network. Any
                  individual can download the software that facilitates the
                  operation of a Digital Asset network, and generally any user
                  can make any desired modifications to such software. Such
                  modifications in the protocol governing the Digital Asset
                  network are proposed to users of the Digital Asset network
                  through software downloads and upgrades. A substantial
                  economic majority of users may need to consent to such
                  software modifications by downloading and running the modified
                  software in order for the proposed modifications to become
                  part of the Digital Asset network. This process ensures that
                  the Digital Asset network remains coherent over time. However,
                  to the extent that the substantial economic majority of users
                  do not accept a proposed modification to a Digital Asset
                  network, but a material portion of the users do consent to the
                  modification, it can create "forks" in the Digital Asset
                  network's blockchain. Such forks create two alternative
                  versions of the blockchain, starting from the point of the
                  fork forward, and essentially cause the creation of two
                  versions of the Digital Asset recorded on the blockchain. Such
                  a fork in a blockchain typically would be addressed by
                  community-led efforts to merge the forked blockchains, and
                  several prior forks have been so merged. However, there can be
                  no assurance that a fork in a blockchain will be resolved and
                  permanent forks in blockchains have resulted.
                </p>
                <p className="mb-4">
                  While theoretically the "splitting" of a Digital Asset that
                  occurs when there is a hard fork in the blockchain should
                  result in each user owning two assets that collectively are
                  valued at the same level as the pre-split assets, this may not
                  always be the case. The post-fork value of Digital Assets can
                  be volatile and unpredictable. This could result in the holder
                  owning the same asset after the fork as before the fork, but
                  at a lower market value. Further, one or both of the post-fork
                  Digital Asset(s) may not be supported by an adequate amount of
                  network participants or developers and may be vulnerable to
                  attacks and other risks. A market participant holding a
                  Digital Asset may also be adversely impacted if its custodian
                  does not allow its customers to participate in a fork that
                  creates a new product. To the extent that Digital Assets in
                  which you invested experience a fork in their blockchains, you
                  could experience significant losses.
                </p>
                <p className="mb-4">
                  Additionally, in certain circumstances forks may be
                  deliberately created by malicious actors. In the event that a
                  majority of the users, or processing power, associated with a
                  Digital Asset have adopted an adverse amendment to a protocol,
                  the investment in such Digital Asset, or the ability to trade
                  such Digital Asset, may be materially impacted.
                </p>
              </div>

              {/* Subsection p */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  p. Regulatory uncertainty
                </h3>
                <p className="mb-4">
                  The value and liquidity of Digital Asset markets may be
                  influenced by new laws, regulations, policies and guidance
                  which may vary significantly among international, federal,
                  state and local jurisdictions and are subject to significant
                  uncertainty. The regulatory environment for Digital Assets is
                  constantly evolving, and new regulations or policies may
                  materially adversely affect your ability to invest in Digital
                  Assets. Regulation of Digital Assets may also vary
                  significantly among international, federal, state, and local
                  jurisdictions and is subject to a level of uncertainty.
                  Various legislative and executive bodies in the United States
                  and in other countries may in the future adopt laws,
                  regulations, or guidance, or take other actions, which may
                  severely impact the use of Digital Assets generally and the
                  technology behind them or the means of transacting in or
                  transferring them. Failure by you to comply with any current
                  or future laws, rules and regulations, some of which may be
                  subject to change, could result in a variety of adverse
                  consequences.
                </p>
              </div>

              {/* Subsection q */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  q. Irreversibility and irrecoverability
                </h3>
                <p className="mb-4">
                  Digital Asset transactions and transfers are generally
                  irreversible without the consent and active participation from
                  the recipient of the transaction. To the extent that any of
                  your Digital Assets are incorrectly or fraudulently
                  transferred, they are likely to be irretrievable. Furthermore,
                  where Digital Assets have been lost, stolen or destroyed under
                  circumstances rendering a party liable to you, then you may
                  have limited recourse against the responsible party. For
                  example, as to a particular event of loss, the only source of
                  recovery might be limited to your custodian or, to the extent
                  identifiable, other responsible third parties (e.g. a thief or
                  terrorist), which may not have the financial resources
                  (including liability insurance coverage) to satisfy a valid
                  claim.
                </p>
              </div>

              {/* Subsection r */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  r. Risks in relation to stablecoins
                </h3>
                <p className="mb-4">
                  Stablecoins are Digital Assets that seek to minimise
                  volatility and maintain a stable value, including by being
                  backed by an asset or portfolio of assets, such as flat
                  currency, or other methods, such as algorithmically controlled
                  supply. There is a risk that the sponsor or issuer (including
                  a smart contract) of a stablecoin does not hold the
                  corresponding asset underlying each stablecoin in circulation
                  and is therefore unable to fulfil one-for-one or other forms
                  of redemptions. Alternatively, software designed to maintain
                  the value of a stablecoin may be subject to errors, flaws,
                  bugs or be subject to hacking or manipulation. Such risks may
                  result in losses in the wider digital assets markets.
                </p>
                <p className="mb-4">
                  In addition, stablecoin issuers or sponsors (including smart
                  contracts and their programmers) may be unregulated and may
                  not provide transparent disclosure regarding their compliance
                  with applicable licensing and regulatory requirements or the
                  financial institutions that hold the underlying assets.
                  Moreover, statements from the regulators in certain
                  jurisdictions suggest that stablecoins may be regulated as
                  securities in those jurisdictions, and some have initiated and
                  settled enforcement proceedings. If a stablecoin issuer or
                  sponsor fails to maintain required licenses to issue a
                  stablecoin, it could subject the issuer or sponsor to
                  regulatory enforcement and injunctive actions, such as
                  freezing funds underlying the stablecoin. The stablecoin
                  issuer or sponsor could also lose its relationships with banks
                  and bank accounts where the underlying assets are deposited if
                  it is engaged in unlicensed activities. If any of these events
                  occur, the value of the affected stablecoins could materially
                  decline, which could have an adverse effect on any Transaction
                  you have entered in respect of such stablecoin.
                </p>
              </div>
            </div>
          </motion.section>
          {/* Section VIII - Instructions and Settlement */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>VIII. Instructions and settlement</span>
            </h2>
            <p className="mb-6">
              We may, in accordance with Applicable Regulations and at our
              discretion, refuse to accept Instructions from you, including (but
              not limited to) cases where Instructions require us to make any
              payment or incur any liability before receipt of sufficient
              cleared funds from you. Similarly, we will not be obliged to
              settle any Transaction or make certain payments or deliveries to
              you until we (or our settlement agent) have received all necessary
              documents or cleared funds from you. We shall not be deemed to be
              holding property on your behalf pending settlement of a
              Transaction.
            </p>
          </motion.section>

          {/* Section IX - Liability, indemnity, and force majeure */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>IX. Liability, indemnity, and force majeure</span>
            </h2>
            <p className="mb-6">
              Neither we nor any Associate nor any of the Indemnified Parties
              shall be liable for any Loss arising from any act or omission in
              the course of or relating to the activities to which the Terms of
              Business or any Trading Agreement apply, subject to certain
              limitations. Moreover, you undertake to indemnify and hold us, our
              Associates (including in respect of any Associate that is a
              broker) and the Indemnified Parties harmless against any Loss
              which any of the foregoing may suffer or incur directly or
              indirectly in connection with or as a result of anything done or
              omitted to be done for the purpose of carrying out any Transaction
              for your account or providing any Service to you or otherwise
              acting on your Instructions under these Terms of Business or any
              Trading Agreement, subject to certain limitations. You shall also
              pay any penalties arising in respect of the Transactions you
              enter.
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                In the event of any failure, interruption or delay in the
                performance of our obligations resulting from acts, events or
                circumstances not reasonably within our or any Associate's
                control, neither we nor any Associate shall be liable or have
                any responsibility for any Loss whatsoever thereby incurred or
                suffered by you, and we shall not be obliged to take or refrain
                from taking any action in such circumstances.
              </p>
            </div>
          </motion.section>

          {/* Section X - No investment advice */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>X. No investment advice</span>
            </h2>
            <p className="mb-6">
              Information provided by DIRECT HONEST SAFE INTERNATIONAL EXCHANGE
              FZE does not constitute investment advice, financial advice,
              trading advice, or any other type of advice whatsoever and is
              presented rather as general market commentary. We shall not
              provide any investment advice in relation to a transaction in the
              form of personal recommendations or advise on the merits of
              buying, selling, or otherwise dealing in particular instruments
              and/or investments or executing particular transactions, any tax,
              legal or other economic consequences or any other rights or
              obligations attaching to such instruments, investments or
              transactions.
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                Therefore, you must rely solely on your own judgment in deciding
                to enter into or close a transaction and we make no assessment
                of the suitability of such actions for you. We give no warranty
                as to the performance or profitability of any transaction or
                investment that you may effect through us. We will not be held
                responsible for any investment decisions made based on the
                information provided by MCCOIN.
              </p>
            </div>
          </motion.section>

          {/* Section XI - You are not acting as intermediary */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>XI. You are not acting as intermediary</span>
            </h2>
            <p className="mb-6">
              We will deal with you on the basis that you act as principal and
              not as agent acting on behalf of or for the benefit of a
              principal. Furthermore, your failure to inform us that another
              person or any software and/or algorithm is operating your account
              on your behalf may result in us terminating the agreement, voiding
              any transactions, undertaking or closing any open transactions.
            </p>
          </motion.section>

          {/* Section XII - Charges, fees and taxes */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              <span>XII. Charges, fees and taxes</span>
            </h2>
            <p className="mb-6">
              Interest, taxes, costs, spreads, fees, and charges may be payable
              by you to us when you trade or on such other basis as agreed
              between us or as notified by us to you from time to time. These
              taxes, charges, costs, spreads and fees will reduce your trading
              net profits (if any) or increase your trading losses.
            </p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">
                It is possible that your intended treatment of the services
                provided by us to you under the Terms of Business or any Trading
                Agreement may be challenged by tax authorities. You must seek
                your own tax advice as to such services which may result in
                adverse tax consequences to you.
              </p>
            </div>
          </motion.section>

          {/* Section XIII - Conflicts of interest */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>XIII. Conflicts of interest</span>
            </h2>
            <p className="mb-6">
              While we have put in place and will maintain effective
              organisational and administrative arrangements with a view to
              taking all appropriate steps to identify and manage conflicts of
              interest between us and our clients and relevant third parties,
              conflicts of interest may nevertheless arise. You irrevocably
              waive any claim you may have against us or any Associate (and
              release us and them from all liability) in respect of any material
              interest or conflict that we or any Associate may have, whether or
              not disclosed to you.
            </p>
            <p className="mb-6">
              If we cannot avoid conflicts of interest after using all
              reasonable efforts, we will disclose such conflicts to affected
              clients. Otherwise, we need not disclose to you, or any other
              client, the nature or extent of any interest we or any Associate
              may have in any Transaction or in any resulting transactions, that
              we may owe duties to other clients which otherwise conflict with
              our duties owed to you, or that we may have a relationship which
              gives rise to a conflict of interest, unless obliged to do so
              under Applicable Regulations. We shall be entitled to retain any
              profit or benefit arising as if no such interest, other duties or
              relationship existed.
            </p>
          </motion.section>

          {/* Section XIV - Acknowledgement */}
          {/* Section XIV - Acknowledgement (Complete with all points a-o) */}
          <motion.section
            whileHover={{ x: 5 }}
            className="border-l-4 border-elf-green pl-6 mb-12 hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Handshake className="w-5 h-5" />
              <span>XIV. Acknowledgement</span>
            </h2>
            <p className="mb-6">
              By entering into any Transaction, you understand, acknowledge and
              agree that:
            </p>

            <div className="space-y-4">
              {/* Point a */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    a. you have received a copy of this Risk Disclosure
                    Statement and read and understood the nature and
                    consequences of the risk factors described herein and have
                    had an opportunity to raise questions and to discuss those
                    risks with any advisors as you have deemed to be necessary
                    or desirable;
                  </p>
                </div>
              </div>

              {/* Point b */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    b. the risk factors cannot disclose all the risks and other
                    significant aspects of the Transactions to be entered into
                    with us and thus cannot be taken as a comprehensive or
                    exhaustive list of all possible risks;
                  </p>
                </div>
              </div>

              {/* Point c */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    c. you are acting on your own account and have reviewed
                    carefully your specific financial needs and investment
                    objectives before entering into any Transaction, and you
                    have made your own independent decision to enter into any
                    Transaction and as to the legality, suitability and
                    appropriateness of any Transaction based upon your own
                    judgment and upon advice from such advisers as you have
                    deemed necessary or desirable;
                  </p>
                </div>
              </div>

              {/* Point d */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    d. you confirm that neither MCCOIN, nor any Associate of
                    MCCOIN, is acting as a fiduciary for or an adviser to you in
                    respect of any Transaction;
                  </p>
                </div>
              </div>

              {/* Point e */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    e. you are not relying on any communication (written or
                    oral) from DIRECT HONEST SAFE INTERNATIONAL EXCHANGE FZE or
                    from any Associate of DIRECT HONEST SAFE INTERNATIONAL
                    EXCHANGE FZE as investment advice or as a recommendation to
                    enter into any Transaction and you understand that the
                    information and explanations of the terms of any Transaction
                    as contained in any Confirmation shall not be considered to
                    be investment advice or a recommendation to enter into such
                    Transaction;
                  </p>
                </div>
              </div>

              {/* Point f */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    f. you understand the tax implications of any Transactions,
                    particularly as regards to Transactions involving Digital
                    Assets, in your jurisdiction including, without limitation,
                    income tax, corporation tax, capital gains tax or any sales
                    tax or value added tax and any other tax framework in place
                    within your country of residence for tax purposes;
                  </p>
                </div>
              </div>

              {/* Point g */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    g. DIRECT HONEST SAFE INTERNATIONAL EXCHANGE FZE assumes no
                    responsibility for your portfolio or for any investment or
                    Transaction which you have entered into, and any opinions,
                    projections, estimates, forecasts and/or targets expressed
                    in any communication (written or oral) from DIRECT HONEST
                    SAFE INTERNATIONAL EXCHANGE FZE should not be construed as
                    or relied upon in any manner as investment, legal, tax or
                    other advice, are provided for informational purposes only,
                    and are subject to change without notice;
                  </p>
                </div>
              </div>

              {/* Point h */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    h. in the event of any inconsistency between the English
                    version of this document and any translation, the English
                    version will prevail and that if you are in any doubt as to
                    the meaning of the English language version or the accuracy
                    of any translation, you should seek independent advice
                    before entering into any Transaction;
                  </p>
                </div>
              </div>

              {/* Point i */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    i. this Risk Disclosure Statement may be varied, amended or
                    supplemented from time to time and by using the Services
                    after any changes to the Risk Disclosure Statement is
                    varied, amended or supplemented, your agreement to such
                    variations, amendments or supplementation is deemed to have
                    been given to MCCOIN;
                  </p>
                </div>
              </div>

              {/* Point j */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    j. no communication (written or oral) received from DIRECT
                    HONEST SAFE INTERNATIONAL EXCHANGE FZE or from any Associate
                    of DIRECT HONEST SAFE INTERNATIONAL EXCHANGE FZE shall be
                    deemed to be an assurance or guarantee as to the expected
                    results of any Transaction;
                  </p>
                </div>
              </div>

              {/* Point k */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    k. you are a professional investor, market counterparty or
                    equivalent definition as set out under the applicable law in
                    your country of residence/registration and you are eligible,
                    in accordance with the applicable law, to request such
                    information and/or be offered/avail of one or more of the
                    products/services indicated herein;
                  </p>
                </div>
              </div>

              {/* Point l */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    l. you have approached DIRECT HONEST SAFE INTERNATIONAL
                    EXCHANGE FZE on your own exclusive initiative and that this
                    approach does not come about as a result of any direct or
                    indirect contact, solicitation, intervention, marketing
                    and/or pre-marketing, arranging, advice, offering or
                    placement efforts nor as result of any form of general
                    solicitation or advertising such as media advertising or
                    public seminars by or on behalf of DIRECT HONEST SAFE
                    INTERNATIONAL EXCHANGE FZE and its Associate;
                  </p>
                </div>
              </div>

              {/* Point m */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    m. to the extent you have already received any of the
                    information, documentation above and/or any other
                    communication concerning MCCOIN, this information,
                    documentation, including this form and/or communication was
                    sent to the undersigned at and after your request and
                    otherwise only upon your own initiative;
                  </p>
                </div>
              </div>

              {/* Point n */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    n. the decision to avail yourself of our services/products
                    is/will be based solely on your own due diligence and review
                    of information and materials received/to be received at your
                    request; and
                  </p>
                </div>
              </div>

              {/* Point o */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>
                    o. if any of the above become untrue or inaccurate, you will
                    promptly inform us in writing, acknowledging that this may
                    cause DIRECT HONEST SAFE INTERNATIONAL EXCHANGE FZE to stop
                    or otherwise refrain from providing you with its
                    services/products.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="border-elf-green text-elf-green hover:bg-elf-green/10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskDisclosurePage;
