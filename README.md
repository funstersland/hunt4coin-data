# Hunt4Coin data: daily crypto screener snapshots

Free, timestamped daily snapshots of technical indicators for the top 100 coins by market cap, published by [Hunt4Coin](https://hunt4coin.com), a free crypto charts, screener and paper-trading site.

Each file in [`snapshots/`](snapshots) is one UTC day, taken shortly after midnight UTC from 1-hour candles on the exchange shown in each row (mostly Binance). The same data, with a written summary for each day, is at [hunt4coin.com/snapshots](https://hunt4coin.com/snapshots).

## Columns

| Column | Meaning |
| --- | --- |
| `snapshot_utc` | When the snapshot was taken (ISO 8601, UTC) |
| `timeframe` | Candle timeframe the indicators were computed on (`1h`) |
| `rank`, `coin_id`, `name`, `symbol` | Market-cap rank and coin identity |
| `exchange`, `pair` | Where the candles came from, e.g. `binance`, `BTC/USDT` |
| `change24h_pct`, `price` | 24-hour change in percent, last price in the quote currency |
| `rsi` | RSI(14) |
| `macd`, `macdSignal`, `macdHist` | MACD(12, 26, 9) line, signal and histogram |
| `macdBullBars`, `macdBearBars` | Bars since the histogram turned positive / negative |
| `ema50`, `ema200`, `distEma200` | EMA 50 and 200, and the percent distance of price from EMA 200 |
| `stDir`, `stFlipBars` | Supertrend(10, 3) direction (1 up, -1 down) and bars since its last flip |
| `bbPctB`, `bbWidth` | Bollinger Bands(20, 2) %B and width |
| `adx` | ADX(14) trend strength |
| `volRatio` | Volume of the last candle relative to its recent average |
| `atrPct` | ATR(14) as a percent of price |

## Updates

A GitHub Action copies each new day from hunt4coin.com every morning (`.github/workflows/update.yml`). Days are never rewritten once published.

## Licence and citation

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Please credit "Hunt4Coin (hunt4coin.com)" and link to the snapshot page for the day you use, e.g. `https://hunt4coin.com/snapshots/2026-11-12`.

Education and research only, not financial advice. Indicator readings describe the past and do not predict prices.

## More from Hunt4Coin

- [Free crypto charts and screener](https://hunt4coin.com)
- [Key facts as JSON](https://hunt4coin.com/facts.json)
- [Summary for AI assistants (llms.txt)](https://hunt4coin.com/llms.txt)
