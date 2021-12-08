import { Routes, Route, useLocation, useParams, useMatch } from "react-router";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import styled from "styled-components";
import Price from "./Prics";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../api";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.span<{ isActive: boolean }>`
  padding: 5px 10px;
  background-color: black;
  margin-right: 10px;
  color: ${props => (props.isActive ? props.theme.accentColor : "white")};
`;

export interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: Date;
  last_data_at: Date;
}

export interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: Quotes;
}

export interface Quotes {
  USD: Usd;
}

export interface Usd {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: Date;
  percent_from_price_ath: number;
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation();

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  console.log(priceMatch);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["info", coinId], () =>
    fetchCoinInfo(coinId),
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    },
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Helmet>
        <title>{state?.name}</title>
      </Helmet>
      <Header>
        <Title>Coins {state?.name || "Loading..."} </Title>
        <div>Price: {tickersData?.quotes.USD.price}</div>
        <div>Total Supply: {tickersData?.total_supply}</div>
      </Header>
      {loading ? <Loader>"Loading..."</Loader> : null}
      <Tab isActive={priceMatch !== null}>
        <Link to={`/${coinId}/price`}>to Price</Link>
      </Tab>
      <Tab isActive={chartMatch !== null}>
        <Link to={`/${coinId}/chart`}>to Chart</Link>
      </Tab>
      <Routes>
        <Route path="price" element={<Price />} />
        <Route path="chart" element={<Chart coinId={coinId} />} />
      </Routes>
    </Container>
  );
}

export default Coin;
