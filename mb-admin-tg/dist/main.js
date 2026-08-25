/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(5);
const market_controller_1 = __webpack_require__(7);
const market_service_1 = __webpack_require__(8);
const token_service_1 = __webpack_require__(19);
const pool_service_1 = __webpack_require__(20);
const pool_discovery_service_1 = __webpack_require__(21);
const quote_service_1 = __webpack_require__(15);
const orderbook_service_1 = __webpack_require__(14);
const swap_service_1 = __webpack_require__(22);
const indexer_service_1 = __webpack_require__(23);
const risk_service_1 = __webpack_require__(11);
const candle_service_1 = __webpack_require__(18);
const events_gateway_1 = __webpack_require__(24);
const ens_controller_1 = __webpack_require__(27);
const oracle_feed_service_1 = __webpack_require__(29);
const oracle_service_1 = __webpack_require__(17);
const oracle_controller_1 = __webpack_require__(31);
const swap_controller_1 = __webpack_require__(32);
const gas_station_service_1 = __webpack_require__(33);
const gas_station_controller_1 = __webpack_require__(34);
const mt5_controller_1 = __webpack_require__(35);
const mm_service_1 = __webpack_require__(36);
const mm_controller_1 = __webpack_require__(37);
const agents_controller_1 = __webpack_require__(38);
const freeze_controller_1 = __webpack_require__(39);
const freeze_service_1 = __webpack_require__(40);
const admin_controller_1 = __webpack_require__(41);
const admin_service_1 = __webpack_require__(42);
const telegram_service_1 = __webpack_require__(43);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        controllers: [market_controller_1.MarketController, ens_controller_1.EnsController, oracle_controller_1.OracleController, swap_controller_1.SwapController, gas_station_controller_1.GasStationController, mt5_controller_1.Mt5Controller, mm_controller_1.MarketMakerController, agents_controller_1.AgentsController, freeze_controller_1.FreezeController, admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService, freeze_service_1.FreezeService, telegram_service_1.TelegramService,
            prisma_service_1.PrismaService,
            market_service_1.MarketService,
            token_service_1.TokenService,
            pool_service_1.PoolService,
            pool_discovery_service_1.PoolDiscoveryService,
            quote_service_1.QuoteService,
            orderbook_service_1.OrderbookService,
            swap_service_1.SwapService,
            indexer_service_1.IndexerService,
            risk_service_1.RiskService,
            candle_service_1.CandleService,
            events_gateway_1.EventsGateway,
            oracle_feed_service_1.OracleFeedService,
            oracle_service_1.OracleService,
            gas_station_service_1.GasStationService,
            mm_service_1.MarketMakerService,
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(6);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketController = void 0;
const common_1 = __webpack_require__(3);
const market_service_1 = __webpack_require__(8);
const orderbook_service_1 = __webpack_require__(14);
const candle_service_1 = __webpack_require__(18);
const risk_service_1 = __webpack_require__(11);
let MarketController = class MarketController {
    marketService;
    orderbookService;
    candles;
    risk;
    constructor(marketService, orderbookService, candles, risk) {
        this.marketService = marketService;
        this.orderbookService = orderbookService;
        this.candles = candles;
        this.risk = risk;
    }
    async list(chainId, dexType, status, riskLevel, search, sort, limit, offset) {
        return this.marketService.list({
            chainId: chainId ? parseInt(chainId) : undefined,
            dexType,
            status,
            riskLevel,
            search,
            sort,
            limit: limit ? parseInt(limit) : undefined,
            offset: offset ? parseInt(offset) : undefined,
        });
    }
    async getMarket(marketId) {
        return this.marketService.getByMarketId(marketId);
    }
    async getTicker(marketId) {
        return this.marketService.getTicker(marketId);
    }
    async getOrderbook(marketId, depth) {
        const market = await this.marketService.getByMarketId(marketId);
        if (!market)
            return null;
        return this.orderbookService.buildOrderbook(market, depth ? parseInt(depth) : 20);
    }
    async getCandles(marketId, interval) {
        const data = await this.candles.getCandles(marketId, interval || "1h", 100);
        return data.map((c) => ({
            time: c.openTime,
            open: c.open, high: c.high, low: c.low, close: c.close,
            volume: c.volumeBase || 0,
        })).reverse();
    }
    async ethUsd() {
        return this.marketService.getEthUsd();
    }
    async createMarket(body) {
        return this.marketService.createMarket(body);
    }
    async checkToken(body) {
        return this.risk.assessToken(body.chainId, body.address);
    }
    async getMarketsByToken(address) {
        return this.marketService.getMarketsByToken(address);
    }
};
exports.MarketController = MarketController;
__decorate([
    (0, common_1.Get)("markets"),
    __param(0, (0, common_1.Query)("chainId")),
    __param(1, (0, common_1.Query)("dexType")),
    __param(2, (0, common_1.Query)("status")),
    __param(3, (0, common_1.Query)("riskLevel")),
    __param(4, (0, common_1.Query)("search")),
    __param(5, (0, common_1.Query)("sort")),
    __param(6, (0, common_1.Query)("limit")),
    __param(7, (0, common_1.Query)("offset")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "list", null);
__decorate([
    (0, common_1.Get)("markets/:marketId"),
    __param(0, (0, common_1.Param)("marketId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getMarket", null);
__decorate([
    (0, common_1.Get)("markets/:marketId/ticker"),
    __param(0, (0, common_1.Param)("marketId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getTicker", null);
__decorate([
    (0, common_1.Get)("markets/:marketId/orderbook"),
    __param(0, (0, common_1.Param)("marketId")),
    __param(1, (0, common_1.Query)("depth")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getOrderbook", null);
__decorate([
    (0, common_1.Get)("candles/:marketId"),
    __param(0, (0, common_1.Param)("marketId")),
    __param(1, (0, common_1.Query)("interval")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getCandles", null);
__decorate([
    (0, common_1.Get)("prices/eth-usd"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "ethUsd", null);
__decorate([
    (0, common_1.Post)("markets/create"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "createMarket", null);
__decorate([
    (0, common_1.Post)("tokens/check"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "checkToken", null);
__decorate([
    (0, common_1.Get)("tokens/:address/markets"),
    __param(0, (0, common_1.Param)("address")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketController.prototype, "getMarketsByToken", null);
exports.MarketController = MarketController = __decorate([
    (0, common_1.Controller)("api/v1"),
    __metadata("design:paramtypes", [typeof (_a = typeof market_service_1.MarketService !== "undefined" && market_service_1.MarketService) === "function" ? _a : Object, typeof (_b = typeof orderbook_service_1.OrderbookService !== "undefined" && orderbook_service_1.OrderbookService) === "function" ? _b : Object, typeof (_c = typeof candle_service_1.CandleService !== "undefined" && candle_service_1.CandleService) === "function" ? _c : Object, typeof (_d = typeof risk_service_1.RiskService !== "undefined" && risk_service_1.RiskService) === "function" ? _d : Object])
], MarketController);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MarketService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const viem_1 = __webpack_require__(9);
const chains_1 = __webpack_require__(10);
const risk_service_1 = __webpack_require__(11);
const chains_2 = __webpack_require__(13);
const KNOWN_DECIMALS = {
    "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": 6, // USDC on Base
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": 6,
    "0x4200000000000000000000000000000000000006": 18, // WETH on Base
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": 18, // WETH mainnet
    "0x1a07a58ba8e1f183d58c04f01da5cd57da7e320a": 18, // SATL
    "0xdac17f958d2ee523a2206206994597c13d831ec7": 6, // USDT
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": 6, // USDC mainnet
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": 6,
};
const UNISWAP_V3_SLOT0 = (0, viem_1.parseAbi)(["function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)"]);
// Annual listing fee for non-Base chains (Base 8453 is free). Paid listing covers the oracle cost + margin.
const LISTING_FEES = {
    1: { amount: 1000, currency: "ETH" }, // Ethereum
    43114: { amount: 200, currency: "AVAX" }, // Avalanche
};
let MarketService = MarketService_1 = class MarketService {
    prisma;
    risk;
    logger = new common_1.Logger(MarketService_1.name);
    client = null;
    baseClient = null;
    priceCache = new Map();
    CACHE_TTL = 15000;
    ethUsdCache = { price: 2000, ts: 0 };
    USD_CACHE_TTL = 300000; // 5 min
    constructor(prisma, risk) {
        this.prisma = prisma;
        this.risk = risk;
    }
    isListingPaid(chainId, address) {
        const paid = (process.env.LISTING_PAID_TOKENS || "").split(",").map((s) => s.trim()).filter(Boolean);
        return paid.includes(`${chainId}:${address.toLowerCase()}`);
    }
    onModuleInit() {
        // Seed known tokens
        Promise.all([
            this.prisma.token.upsert({ where: { chainId_address: { chainId: 1, address: "0x1a07a58ba8e1f183d58c04f01da5cd57da7e320a" } }, update: { symbol: "SATL", decimals: 18 }, create: { chainId: 1, address: "0x1a07a58ba8e1f183d58c04f01da5cd57da7e320a", symbol: "SATL", decimals: 18 } }),
            this.prisma.token.upsert({ where: { chainId_address: { chainId: 1, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" } }, update: { symbol: "WETH", decimals: 18 }, create: { chainId: 1, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", symbol: "WETH", decimals: 18 } }),
            this.prisma.token.upsert({ where: { chainId_address: { chainId: 8453, address: "0x4200000000000000000000000000000000000006" } }, update: { symbol: "WETH", decimals: 18 }, create: { chainId: 8453, address: "0x4200000000000000000000000000000000000006", symbol: "WETH", decimals: 18 } }),
            this.prisma.token.upsert({ where: { chainId_address: { chainId: 8453, address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" } }, update: { symbol: "USDC", decimals: 6 }, create: { chainId: 8453, address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", symbol: "USDC", decimals: 6 } }),
        ]).catch(() => { });
        const rpc = process.env.RPC_URL_ETH || undefined;
        try {
            this.client = (0, viem_1.createPublicClient)({
                chain: chains_1.mainnet,
                transport: (0, viem_1.http)(rpc),
            });
            this.logger.log("On-chain price client initialized (mainnet)");
        }
        catch (e) {
            this.logger.warn("No RPC for on-chain prices (mainnet)");
        }
        const baseRpc = process.env.RPC_URL_BASE || undefined;
        if (baseRpc) {
            try {
                this.baseClient = (0, viem_1.createPublicClient)({
                    chain: chains_1.base,
                    transport: (0, viem_1.http)(baseRpc),
                });
                this.logger.log("On-chain price client initialized (base)");
                // Pre-warm USD cache (fire-and-forget)
                setTimeout(() => this.getEthUsd().catch(() => { }), 100);
            }
            catch (e) {
                this.logger.warn("No RPC for on-chain prices (base)");
            }
        }
    }
    async list(params) {
        const where = {};
        if (params.chainId)
            where.chainId = params.chainId;
        if (params.dexType)
            where.dexType = params.dexType;
        if (params.status)
            where.status = params.status;
        if (params.riskLevel)
            where.riskLevel = params.riskLevel;
        const [items, total] = await Promise.all([
            this.prisma.market.findMany({ where, orderBy: params.sort === "volume" ? { id: "desc" } : { createdAt: "desc" }, take: params.limit || 20, skip: params.offset || 0 }),
            this.prisma.market.count({ where }),
        ]);
        const tokens = await this.prisma.token.findMany();
        const sym = new Map();
        for (const t of tokens)
            sym.set(t.address.toLowerCase() + ":" + t.chainId, t.symbol || "");
        const enriched = items.map((m) => ({
            ...m,
            baseSymbol: sym.get(m.baseToken.toLowerCase() + ":" + m.chainId) || null,
            quoteSymbol: sym.get(m.quoteToken.toLowerCase() + ":" + m.chainId) || null,
            token0Symbol: sym.get(m.token0Address.toLowerCase() + ":" + m.chainId) || null,
            token1Symbol: sym.get(m.token1Address.toLowerCase() + ":" + m.chainId) || null,
        }));
        return { items: enriched, total };
    }
    async getByMarketId(marketId) {
        const market = await this.prisma.market.findUnique({ where: { marketId } });
        if (!market)
            return null;
        const tokens = await this.prisma.token.findMany({
            where: { chainId: market.chainId, OR: [{ address: market.token0Address }, { address: market.token1Address }] }
        });
        const sym = new Map();
        for (const t of tokens)
            sym.set(t.address.toLowerCase(), t.symbol || "");
        return {
            ...market,
            baseSymbol: sym.get(market.baseToken.toLowerCase()) || null,
            quoteSymbol: sym.get(market.quoteToken.toLowerCase()) || null,
            token0Symbol: sym.get(market.token0Address.toLowerCase()) || null,
            token1Symbol: sym.get(market.token1Address.toLowerCase()) || null,
        };
    }
    async getMarketsByToken(tokenAddress) {
        return this.prisma.market.findMany({ where: { OR: [{ token0Address: tokenAddress }, { token1Address: tokenAddress }] } });
    }
    async getTicker(marketId) {
        const market = await this.prisma.market.findUnique({ where: { marketId } });
        if (!market)
            return null;
        const onchain = await this.fetchOnchainPrice(market.poolAddress, market);
        if (onchain) {
            return { marketId, lastPrice: onchain.price, priceChange24h: "0", high24h: onchain.price, low24h: onchain.price, volume24hBase: "0", volume24hQuote: "0", sqrtPriceX96: onchain.sqrtPriceX96, tick: onchain.tick };
        }
        return { marketId, lastPrice: "0.0", priceChange24h: "0", high24h: "0.0", low24h: "0.0", volume24hBase: "0", volume24hQuote: "0" };
    }
    async fetchOnchainPrice(poolAddress, market) {
        const client = market?.chainId ? (0, chains_2.getClient)(market.chainId) : this.client;
        if (!client)
            return null;
        const cached = this.priceCache.get(poolAddress);
        if (cached && Date.now() - cached.ts < this.CACHE_TTL)
            return { price: cached.price, sqrtPriceX96: "", tick: "" };
        try {
            let slot0;
            try {
                slot0 = (await client.readContract({ address: poolAddress, abi: UNISWAP_V3_SLOT0, functionName: "slot0" }));
            }
            catch {
                return null;
            }
            const sqrtPriceX96 = slot0[0];
            const tick = slot0[1];
            const d0 = market?.token0Decimals || KNOWN_DECIMALS[market?.token0Address?.toLowerCase() || ""] || 18;
            const d1 = market?.token1Decimals || KNOWN_DECIMALS[market?.token1Address?.toLowerCase() || ""] || 18;
            // Resolve base token address (handles legacy symbol-typed baseToken)
            let baseAddr = market?.baseToken?.toLowerCase() || "";
            if (baseAddr && !baseAddr.startsWith("0x")) {
                const t = await this.prisma.token.findFirst({ where: { chainId: market.chainId, symbol: market.baseToken } });
                baseAddr = t?.address?.toLowerCase() || baseAddr;
            }
            const baseIsToken0 = baseAddr === market?.token0Address?.toLowerCase();
            // Uniswap V3: tick -> raw token1/token0 = 1.0001^tick
            const rawPrice = Math.pow(1.0001, tick);
            let price;
            if (baseIsToken0) {
                // base=token0, quote=token1: price = quote/base = token1/token0 (human)
                price = rawPrice * Math.pow(10, d0 - d1);
            }
            else {
                // base=token1, quote=token0: price = quote/base = token0/token1 (human)
                price = (1 / rawPrice) * Math.pow(10, d1 - d0);
            }
            if (!isFinite(price) || price <= 0)
                price = 0;
            const priceStr = price.toPrecision(8);
            this.priceCache.set(poolAddress, { price: priceStr, ts: Date.now() });
            return { price: priceStr, sqrtPriceX96: sqrtPriceX96.toString(), tick: tick.toString() };
        }
        catch (err) {
            return null;
        }
    }
    async getOrderbook(marketId, _depth = 20) {
        const market = await this.prisma.market.findUnique({ where: { marketId } });
        if (!market)
            return null;
        const onchain = await this.fetchOnchainPrice(market.poolAddress, market);
        const spot = onchain ? parseFloat(onchain.price) : 1.0;
        const bids = [];
        const asks = [];
        for (let i = 0; i < Math.min(_depth, 10); i++) {
            const pct = 0.001 * (i + 1) * (i + 1);
            asks.push({ price: (spot * (1 + pct)).toPrecision(6), amount: (50000 * (1 - i * 0.08)).toFixed(0), total: (50000 * (1 - i * 0.08) * spot * (1 + pct)).toFixed(4), source: "DEX_AMM" });
            bids.push({ price: (spot * (1 - pct)).toPrecision(6), amount: (50000 * (1 - i * 0.08)).toFixed(0), total: (50000 * (1 - i * 0.08) * spot * (1 - pct)).toFixed(4), source: "DEX_AMM" });
        }
        return { bids, asks, spot: spot.toString(), updatedAt: Math.floor(Date.now() / 1000) };
    }
    async createMarket(params) {
        const { chainId, tokenAddress } = params;
        const cfg = chains_2.ADDRESSES[chainId];
        if (!cfg)
            return { created: false, error: `Unsupported chainId ${chainId}` };
        // Listing fee: Base (8453) is free; other chains require a paid listing (annual fee covers the oracle)
        if (chainId !== 8453) {
            const fee = LISTING_FEES[chainId];
            if (fee && !this.isListingPaid(chainId, tokenAddress)) {
                return {
                    created: false,
                    error: `Listing on this chain requires an annual fee: $${fee.amount} ${fee.currency}. Pay to the ${fee.currency} wallet, then contact support to activate the listing.`,
                    listingFee: fee.amount,
                    feeCurrency: fee.currency,
                };
            }
        }
        // Default quote = WETH of this chain; if quoteToken given, use it
        const quote = (params.quoteToken || cfg.weth).toLowerCase();
        const base = tokenAddress.toLowerCase();
        if (base === quote)
            return { created: false, error: "base == quote" };
        // 1. Run token risk assessment (includes fork detection on the same chain)
        const risk = await this.risk.assessToken(chainId, base).catch(() => null);
        const riskLevel = risk?.level || "UNKNOWN";
        const riskScore = risk?.score || 0;
        // 2. Discover the real Uniswap V3 pool
        const pool = await this.findUniV3Pool(chainId, base, quote);
        if (!pool)
            return { created: false, error: "No Uniswap V3 pool found for this pair", risk: riskLevel };
        // 2.5 Fetch real token metadata (symbol + decimals) and persist
        const meta = await this.fetchTokenMeta(chainId, base).catch(() => null);
        if (meta?.symbol) {
            await this.prisma.token.upsert({
                where: { chainId_address: { chainId, address: base } },
                update: { symbol: meta.symbol, decimals: meta.decimals },
                create: { chainId, address: base, symbol: meta.symbol, decimals: meta.decimals },
            }).catch(() => { });
        }
        // 3. Market ID
        const baseSymbol = meta?.symbol || (await this.prisma.token.findUnique({ where: { chainId_address: { chainId, address: base } } }))?.symbol || base.slice(0, 6);
        const chainTag = chainId === 1 ? "ETH" : chainId === 8453 ? "BASE" : chainId === 43114 ? "AVAX" : "CHAIN" + chainId;
        const marketId = `${baseSymbol}-WETH-UNI3-${chainTag}`;
        // 4. Check existing (by marketId OR by pair — protects against legacy hash-ID markets)
        const existing = await this.prisma.market.findFirst({
            where: { chainId, baseToken: base, quoteToken: quote },
        });
        if (existing)
            return { created: false, marketId: existing.marketId, message: "Market already exists" };
        // 5. Uniswap sorts token0 < token1
        const [token0, token1] = base < quote ? [base, quote] : [quote, base];
        // 6. Create market with real pool data
        const market = await this.prisma.market.create({
            data: {
                marketId,
                chainId,
                dexType: "UNISWAP_V3",
                poolAddress: pool.address,
                uniV3Fee: pool.fee,
                token0Address: token0,
                token1Address: token1,
                baseToken: base,
                quoteToken: quote,
                sponsor: "",
                status: "ACTIVE",
                riskLevel,
                riskScore,
            },
        });
        // 7. Register pool record
        await this.prisma.pool.upsert({
            where: { chainId_poolAddress: { chainId, poolAddress: pool.address } },
            update: { token0Address: token0, token1Address: token1, fee: pool.fee },
            create: { chainId, dexType: "UNISWAP_V3", poolAddress: pool.address, token0Address: token0, token1Address: token1, fee: pool.fee },
        }).catch(() => { });
        return { created: true, marketId, poolAddress: pool.address, fee: pool.fee, risk: riskLevel, isFork: risk?.details?.isFork || false };
    }
    async findUniV3Pool(chainId, tokenA, tokenB) {
        const factory = chains_2.ADDRESSES[chainId]?.uniV3Factory;
        if (!factory)
            return null;
        let client;
        try {
            client = (0, chains_2.getClient)(chainId);
        }
        catch {
            return null;
        }
        const abi = (0, viem_1.parseAbi)(["function getPool(address,address,uint24) view returns (address)"]);
        for (const fee of [3000, 500, 100, 10000]) {
            try {
                const addr = await client.readContract({ address: factory, abi, functionName: "getPool", args: [tokenA, tokenB, fee] });
                if (addr && addr !== "0x0000000000000000000000000000000000000000")
                    return { address: addr, fee };
            }
            catch { /* try next fee tier */ }
        }
        return null;
    }
    async fetchTokenMeta(chainId, address) {
        try {
            const client = (0, chains_2.getClient)(chainId);
            const abi = (0, viem_1.parseAbi)([
                "function symbol() view returns (string)",
                "function decimals() view returns (uint8)",
            ]);
            const [symbol, decimals] = await Promise.all([
                client.readContract({ address: address, abi, functionName: "symbol" }),
                client.readContract({ address: address, abi, functionName: "decimals" }),
            ]);
            return { symbol: String(symbol), decimals: Number(decimals) };
        }
        catch {
            return null;
        }
    }
    async getEthUsd() {
        const now = Date.now();
        if (now - this.ethUsdCache.ts < this.USD_CACHE_TTL)
            return this.ethUsdCache;
        try {
            // Use our own WETH-USDC on-chain price (instant, no external API)
            const ticker = await this.getTicker("WETH-USDC-UNI3-BASE");
            if (ticker && parseFloat(ticker.lastPrice) > 0) {
                this.ethUsdCache = { price: parseFloat(ticker.lastPrice), ts: now };
            }
        }
        catch { }
        // Fallback to CoinGecko if on-chain fails
        // Fallback: keep last known price or use default
        if (this.ethUsdCache.price === 2000 && now - this.ethUsdCache.ts < 600000) {
            this.ethUsdCache = { price: 1917, ts: now }; // approximate, will update on next successful fetch
        }
        if (now - this.ethUsdCache.ts >= this.USD_CACHE_TTL) {
            try {
                const r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
                const d = await r.json();
                const eth = d?.ethereum?.usd || this.ethUsdCache.price;
                this.ethUsdCache = { price: eth, ts: now };
            }
            catch { }
        }
        return this.ethUsdCache;
    }
};
exports.MarketService = MarketService;
exports.MarketService = MarketService = MarketService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof risk_service_1.RiskService !== "undefined" && risk_service_1.RiskService) === "function" ? _b : Object])
], MarketService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("viem");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("viem/chains");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RiskService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiskService = void 0;
const common_1 = __webpack_require__(3);
const crypto_1 = __webpack_require__(12);
const prisma_service_1 = __webpack_require__(5);
const chains_1 = __webpack_require__(13);
let RiskService = RiskService_1 = class RiskService {
    prisma;
    logger = new common_1.Logger(RiskService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async assessToken(chainId, tokenAddress) {
        const flags = [];
        const details = {};
        let score = 100;
        const client = (0, chains_1.getClient)(chainId);
        const addr = tokenAddress.startsWith("0x") ? tokenAddress : `0x${tokenAddress}`;
        // 1. Verification
        const verified = await this.checkVerification(chainId, addr);
        details.verified = verified;
        if (!verified) {
            score -= 15;
            flags.push("UNVERIFIED_CONTRACT");
        }
        // 2. Holders
        const holderInfo = await this.getHolderInfo(chainId, addr);
        details.holders = holderInfo.count;
        details.topHolderPct = holderInfo.topPct;
        if (holderInfo.count < 10) {
            score -= 20;
            flags.push("FEW_HOLDERS");
        }
        if (holderInfo.topPct > 50) {
            score -= 15;
            flags.push("CONCENTRATED_OWNERSHIP");
        }
        // 3. Proxy
        const isProxy = await this.detectProxy(chainId, addr);
        details.isProxy = isProxy;
        if (isProxy) {
            score -= 10;
            flags.push("PROXY_CONTRACT");
        }
        // 4. Mint
        const mintInfo = await this.detectMint(chainId, addr);
        details.hasMint = mintInfo.hasMint;
        if (mintInfo.hasMint) {
            score -= 25;
            flags.push("MINTABLE");
        }
        if (mintInfo.ownerSupply) {
            score -= 10;
            flags.push("OWNER_SUPPLY");
        }
        // 5. Pause
        const hasPause = await this.detectPause(chainId, addr);
        details.hasPause = hasPause;
        if (hasPause) {
            score -= 15;
            flags.push("PAUSABLE");
        }
        // 6. Honeypot
        const honeypotRisk = await this.checkHoneypot(chainId, addr);
        details.honeypotRisk = honeypotRisk;
        if (honeypotRisk === "HIGH") {
            score -= 40;
            flags.push("HONEYPOT_RISK");
        }
        else if (honeypotRisk === "MEDIUM") {
            score -= 15;
            flags.push("HONEYPOT_POTENTIAL");
        }
        // 7. Pool info
        const poolInfo = await this.getPoolInfo(chainId, addr);
        details.poolAge = poolInfo.age;
        details.liquidity = poolInfo.liquidity;
        if (poolInfo.age > 0 && poolInfo.age < 24) {
            score -= 5;
            flags.push("NEW_POOL");
        }
        if (poolInfo.liquidity === "LOW") {
            score -= 10;
            flags.push("LOW_LIQUIDITY");
        }
        // 8. Fork detection (bytecode fingerprint, scoped to the SAME chain only)
        const fork = await this.detectFork(chainId, addr);
        details.isFork = fork.isFork;
        details.codeHash = fork.codeHash;
        details.forkOfToken = fork.forkOfToken;
        if (fork.isFork) {
            score -= 30;
            flags.push("FORK");
        }
        score = Math.max(0, Math.min(100, score));
        let level = score <= 30 ? "CRITICAL" : score <= 50 ? "HIGH" : score <= 70 ? "MEDIUM" : "LOW";
        // Save
        await this.prisma.riskReport.create({
            data: { tokenAddress, score, level, flagsJson: JSON.stringify(flags), detailsJson: JSON.stringify(details) },
        }).catch((e) => this.logger.warn(`Risk report save: ${e}`));
        await this.prisma.token.upsert({
            where: { chainId_address: { chainId, address: tokenAddress } },
            update: { riskScore: score, riskLevel: level, runtimeCodeHash: fork.codeHash, isFork: fork.isFork, forkOfToken: fork.forkOfToken || "" },
            create: { chainId, address: tokenAddress, riskScore: score, riskLevel: level, runtimeCodeHash: fork.codeHash, isFork: fork.isFork, forkOfToken: fork.forkOfToken || "" },
        }).catch((e) => this.logger.warn(`Token risk update: ${e}`));
        return { score, level, flags, details };
    }
    // --- Fork detection (bytecode fingerprint, per-chain) ---
    async detectFork(chainId, addr) {
        try {
            const client = (0, chains_1.getClient)(chainId);
            const code = await client.getBytecode({ address: addr });
            if (!code || code === "0x")
                return { isFork: false, codeHash: "", forkOfToken: "" };
            const codeHash = (0, crypto_1.createHash)("sha256").update(code.toLowerCase()).digest("hex");
            // Compare only against tokens on the SAME chain (cross-chain same-code is NOT a fork)
            const match = await this.prisma.token.findFirst({
                where: { chainId, runtimeCodeHash: codeHash, NOT: { address: addr.toLowerCase() } },
            });
            return { isFork: !!match, codeHash, forkOfToken: match?.address || "" };
        }
        catch (e) {
            return { isFork: false, codeHash: "", forkOfToken: "" };
        }
    }
    // --- On-chain checks ---
    async checkVerification(chainId, addr) {
        const apiKey = process.env.BASESCAN_KEY;
        if (!apiKey)
            return true;
        const apiUrl = chainId === 8453 ? "https://api.basescan.org/api" : "https://api-sepolia.basescan.org/api";
        try {
            const resp = await fetch(`${apiUrl}?module=contract&action=getsourcecode&address=${addr}&apikey=${apiKey}`);
            const data = (await resp.json());
            return data?.result?.[0]?.ABI !== "Contract source code not verified";
        }
        catch {
            return false;
        }
    }
    async getHolderInfo(chainId, addr) {
        const apiKey = process.env.BASESCAN_KEY;
        if (!apiKey)
            return { count: 0, topPct: 0 };
        const apiUrl = chainId === 8453 ? "https://api.basescan.org/api" : "https://api-sepolia.basescan.org/api";
        try {
            const resp = await fetch(`${apiUrl}?module=token&action=tokenholderlist&contractaddress=${addr}&page=1&offset=100&apikey=${apiKey}`);
            const data = (await resp.json());
            const holders = data?.result || [];
            let topPct = 0;
            if (holders.length > 0) {
                const maxBal = Math.max(...holders.map((h) => parseFloat(h.TokenHolderQuantity || "0")));
                const total = holders.reduce((s, h) => s + parseFloat(h.TokenHolderQuantity || "0"), 0);
                topPct = total > 0 ? (maxBal / total) * 100 : 0;
            }
            return { count: holders.length, topPct };
        }
        catch {
            return { count: 0, topPct: 0 };
        }
    }
    async detectProxy(chainId, addr) {
        try {
            const client = (0, chains_1.getClient)(chainId);
            const impl = await client.getStorageAt({ address: addr, slot: "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc" });
            if (impl && impl !== `0x${"0".repeat(64)}`)
                return true;
            const admin = await client.getStorageAt({ address: addr, slot: "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103" });
            return admin !== `0x${"0".repeat(64)}`;
        }
        catch {
            return false;
        }
    }
    async detectMint(chainId, addr) {
        try {
            const client = (0, chains_1.getClient)(chainId);
            let owner = null;
            try {
                owner = (await client.readContract({
                    address: addr,
                    abi: [{ type: "function", name: "owner", stateMutability: "view", inputs: [], outputs: [{ type: "address" }] }],
                    functionName: "owner",
                }));
            }
            catch { /* no owner */ }
            let ownerSupply = false;
            if (owner) {
                try {
                    const bal = (await client.readContract({
                        address: addr,
                        abi: [{ type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ type: "address" }], outputs: [{ type: "uint256" }] }],
                        functionName: "balanceOf",
                        args: [owner],
                    }));
                    const ts = (await client.readContract({
                        address: addr,
                        abi: [{ type: "function", name: "totalSupply", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] }],
                        functionName: "totalSupply",
                    }));
                    if (ts > 0n && bal > ts / 20n)
                        ownerSupply = true;
                }
                catch { /* skip */ }
            }
            // Check bytecode for mint selectors
            const code = await client.getBytecode({ address: addr });
            const hasMint = code ? ["40c10f19", "a0712d68"].some(s => code.toLowerCase().includes(s)) : false;
            return { hasMint, ownerSupply };
        }
        catch {
            return { hasMint: false, ownerSupply: false };
        }
    }
    async detectPause(chainId, addr) {
        try {
            const client = (0, chains_1.getClient)(chainId);
            await client.readContract({
                address: addr,
                abi: [{ type: "function", name: "paused", stateMutability: "view", inputs: [], outputs: [{ type: "bool" }] }],
                functionName: "paused",
            });
            return true;
        }
        catch {
            return false;
        }
    }
    async checkHoneypot(chainId, addr) {
        try {
            const client = (0, chains_1.getClient)(chainId);
            const code = await client.getBytecode({ address: addr });
            if (!code)
                return "HIGH";
            const sigs = ["1fe0e127", "7535d246", "27e235e3"];
            const matchCount = sigs.filter(s => code.toLowerCase().includes(s)).length;
            if (matchCount >= 2)
                return "HIGH";
            if (matchCount === 1)
                return "MEDIUM";
            return "LOW";
        }
        catch {
            return "HIGH";
        }
    }
    async getPoolInfo(chainId, addr) {
        try {
            const pool = await this.prisma.pool.findFirst({
                where: { chainId, OR: [{ token0Address: addr.toLowerCase() }, { token1Address: addr.toLowerCase() }] },
                orderBy: { createdAt: "asc" },
            });
            if (!pool)
                return { age: 0, liquidity: "LOW" };
            const ageHours = Math.floor((Date.now() - new Date(pool.createdAt).getTime()) / 3600000);
            const liquidity = pool.liquidityUsd > 10000 ? "HIGH" : pool.liquidityUsd > 1000 ? "MEDIUM" : "LOW";
            return { age: ageHours, liquidity };
        }
        catch {
            return { age: 0, liquidity: "LOW" };
        }
    }
};
exports.RiskService = RiskService;
exports.RiskService = RiskService = RiskService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], RiskService);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ADDRESSES = void 0;
exports.getClient = getClient;
const viem_1 = __webpack_require__(9);
const chains_1 = __webpack_require__(10);
const ETHEREUM = (0, viem_1.defineChain)({
    id: 1,
    name: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: ["https://eth.drpc.org"] } },
    blockExplorers: { default: { name: "Etherscan", url: "https://etherscan.io" } },
});
const CHAINS = {
    1: ETHEREUM,
    8453: chains_1.base,
    84532: chains_1.baseSepolia,
    43114: chains_1.avalanche,
};
exports.ADDRESSES = {
    1: {
        uniV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        uniV3QuoterV2: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
        uniV3SwapRouter02: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        uniV3PositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
        aerodromeFactory: "0x0000000000000000000000000000000000000000",
        aerodromeRouter: "0x0000000000000000000000000000000000000000",
        weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
    8453: {
        uniV3Factory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        uniV3QuoterV2: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
        uniV3SwapRouter02: "0x2626664c2603336E57B271c5C0b26F421741e481",
        uniV3PositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
        aerodromeFactory: "0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
        aerodromeRouter: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
        weth: "0x4200000000000000000000000000000000000006",
        usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
    43114: {
        uniV3Factory: "0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD",
        uniV3QuoterV2: "0xbe0F5544EC67Ae09bF8BA979A9f11DaEa0DDE2Ef",
        uniV3SwapRouter02: "0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE",
        uniV3PositionManager: "0x655C406EBFa14EE2006250925e54ec43AD184f8B",
        aerodromeFactory: "",
        aerodromeRouter: "",
        weth: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        usdc: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    84532: {
        uniV3Factory: "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",
        uniV3QuoterV2: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
        uniV3SwapRouter02: "0x2626664c2603336E57B271c5C0b26F421741e481",
        uniV3PositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
        aerodromeFactory: "0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
        aerodromeRouter: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
        weth: "0x4200000000000000000000000000000000000006",
        usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
};
function getClient(chainId) {
    return (0, viem_1.createPublicClient)({
        chain: CHAINS[chainId],
        transport: (0, viem_1.http)(process.env[`RPC_${chainId}`]),
    });
}


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OrderbookService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderbookService = void 0;
const common_1 = __webpack_require__(3);
const quote_service_1 = __webpack_require__(15);
const oracle_service_1 = __webpack_require__(17);
let OrderbookService = OrderbookService_1 = class OrderbookService {
    quote;
    oracle;
    logger = new common_1.Logger(OrderbookService_1.name);
    constructor(quote, oracle) {
        this.quote = quote;
        this.oracle = oracle;
    }
    async buildOrderbook(market, depth = 20) {
        // Get real spot price from Oracle
        const spot = await this.oracle.getMarketPrice(market);
        if (spot <= 0) {
            this.logger.warn(`Orderbook: no spot price for ${market.marketId}`);
            return { bids: [], asks: [], updatedAt: 0 };
        }
        const steps = this.priceSteps(depth);
        const asks = [];
        const bids = [];
        let prevAskCum = 0;
        let prevBidCum = 0;
        for (const stepPct of steps) {
            // ASK side: quote BUY of token0 (how much token0 needed to push price up)
            const askPrice = spot * (1 + stepPct);
            const askCumAmount = await this.amountToReachPrice(market, askPrice, "BUY");
            const askLevelAmount = Math.max(0, askCumAmount - prevAskCum);
            prevAskCum = askCumAmount;
            asks.push({
                price: askPrice.toPrecision(6),
                amount: askLevelAmount.toFixed(4),
                total: (askLevelAmount * askPrice).toFixed(4),
                source: "DEX_AMM",
            });
            // BID side: quote SELL of token0 (how much token0 needed to push price down)
            const bidPrice = spot * (1 - stepPct);
            const bidCumAmount = await this.amountToReachPrice(market, bidPrice, "SELL");
            const bidLevelAmount = Math.max(0, bidCumAmount - prevBidCum);
            prevBidCum = bidCumAmount;
            bids.push({
                price: bidPrice.toPrecision(6),
                amount: bidLevelAmount.toFixed(4),
                total: (bidLevelAmount * bidPrice).toFixed(4),
                source: "DEX_AMM",
            });
        }
        return { bids, asks, updatedAt: Math.floor(Date.now() / 1000) };
    }
    /**
     * Generates quadratic price steps: 0.1%, 0.4%, 0.9%, 1.6%, 2.5% ...
     * This creates reasonable spacing for the virtual orderbook.
     */
    priceSteps(depth) {
        return Array.from({ length: depth }, (_, i) => parseFloat((0.001 * (i + 1) * (i + 1)).toFixed(6)));
    }
    /**
     * Binary search to find the amountIn needed to move price to targetPrice.
     * Uses real Uniswap V3 quotes via QuoterV2 for accuracy.
     */
    async amountToReachPrice(market, targetPrice, side) {
        // Convert price to token-in amount using iterative quotes
        // Binary search between 0.001 and 100,000 units of base token
        let lo = 1e-6;
        let hi = 1e5;
        const tolerance = 0.02; // 2% price tolerance
        const maxIter = 15;
        for (let iter = 0; iter < maxIter; iter++) {
            const mid = (lo + hi) / 2;
            const midAmount = Math.round(mid * 1e18); // 18 decimals
            if (midAmount <= 0) {
                lo = mid * 10;
                continue;
            }
            try {
                const quote = await this.getQuote(market, midAmount, side);
                const execPrice = Number(quote.amountOut) / Number(quote.amountIn);
                // For BUY: price = amountOut / amountIn, we check if we exceeded target
                // For SELL: price = amountIn / amountOut
                const deviation = Math.abs(execPrice - targetPrice) / targetPrice;
                if (deviation < tolerance)
                    return mid;
                if (execPrice > targetPrice) {
                    if (side === "BUY")
                        hi = mid;
                    else
                        lo = mid;
                }
                else {
                    if (side === "BUY")
                        lo = mid;
                    else
                        hi = mid;
                }
            }
            catch {
                // Quote failed — reduce range
                hi = mid;
            }
        }
        return (lo + hi) / 2;
    }
    async getQuote(market, amountInDecimals, side) {
        // Determine token-in/token-out based on side
        const tokenIn = side === "BUY"
            ? market.quoteToken // Pay with quote token
            : market.baseToken; // Pay with base token
        const tokenOut = side === "BUY"
            ? market.baseToken // Receive base token
            : market.quoteToken; // Receive quote token
        // We need raw quote from the pool
        const quote = await this.quote.quoteUniV3({
            chainId: market.chainId,
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            amountIn: BigInt(amountInDecimals),
            fee: market.uniV3Fee || 3000,
            slippageBps: 500, // 5% for orderbook simulation
        });
        return {
            amountIn: amountInDecimals,
            amountOut: Number(quote.amountOut),
        };
    }
};
exports.OrderbookService = OrderbookService;
exports.OrderbookService = OrderbookService = OrderbookService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof quote_service_1.QuoteService !== "undefined" && quote_service_1.QuoteService) === "function" ? _a : Object, typeof (_b = typeof oracle_service_1.OracleService !== "undefined" && oracle_service_1.OracleService) === "function" ? _b : Object])
], OrderbookService);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteService = void 0;
const common_1 = __webpack_require__(3);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
let QuoteService = class QuoteService {
    async quoteUniV3(params) {
        const client = (0, chains_1.getClient)(params.chainId);
        const addr = chains_1.ADDRESSES[params.chainId];
        const { result } = await client.simulateContract({
            address: addr.uniV3QuoterV2,
            abi: abis_1.QUOTERV2_ABI,
            functionName: "quoteExactInputSingle",
            args: [{
                    tokenIn: params.tokenIn,
                    tokenOut: params.tokenOut,
                    amountIn: params.amountIn,
                    fee: params.fee,
                    sqrtPriceLimitX96: 0n,
                }],
        });
        const [amountOut, , , gasEstimate] = result;
        const execPrice = Number(amountOut) / Number(params.amountIn);
        const priceImpact = params.spotPrice
            ? Math.abs((execPrice - params.spotPrice) / params.spotPrice) * 100
            : 0;
        const minAmountOut = (amountOut * BigInt(10000 - params.slippageBps)) / 10000n;
        return {
            amountIn: params.amountIn.toString(),
            amountOut: amountOut.toString(),
            price: execPrice.toString(),
            priceImpact: priceImpact.toFixed(2),
            minAmountOut: minAmountOut.toString(),
            gasEstimate: gasEstimate.toString(),
        };
    }
};
exports.QuoteService = QuoteService;
exports.QuoteService = QuoteService = __decorate([
    (0, common_1.Injectable)()
], QuoteService);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REGISTRY_ABI = exports.ERC20_ABI = exports.SWAP_ROUTER02_ABI = exports.QUOTERV2_ABI = exports.UNIV3_POOL_ABI = void 0;
exports.UNIV3_POOL_ABI = [
    {
        type: "function", name: "slot0", stateMutability: "view", inputs: [],
        outputs: [
            { name: "sqrtPriceX96", type: "uint160" },
            { name: "tick", type: "int24" },
            { name: "observationIndex", type: "uint16" },
            { name: "observationCardinality", type: "uint16" },
            { name: "observationCardinalityNext", type: "uint16" },
            { name: "feeProtocol", type: "uint8" },
            { name: "unlocked", type: "bool" },
        ],
    },
    {
        type: "function", name: "liquidity", stateMutability: "view", inputs: [],
        outputs: [{ name: "", type: "uint128" }],
    },
    {
        type: "function", name: "token0", stateMutability: "view", inputs: [],
        outputs: [{ name: "", type: "address" }],
    },
    {
        type: "function", name: "token1", stateMutability: "view", inputs: [],
        outputs: [{ name: "", type: "address" }],
    },
    {
        type: "event", name: "Swap", inputs: [
            { name: "sender", type: "address", indexed: true },
            { name: "recipient", type: "address", indexed: true },
            { name: "amount0", type: "int256", indexed: false },
            { name: "amount1", type: "int256", indexed: false },
            { name: "sqrtPriceX96", type: "uint160", indexed: false },
            { name: "liquidity", type: "uint128", indexed: false },
            { name: "tick", type: "int24", indexed: false },
        ],
    },
];
exports.QUOTERV2_ABI = [
    {
        type: "function", name: "quoteExactInputSingle", stateMutability: "nonpayable",
        inputs: [{
                name: "params", type: "tuple", components: [
                    { name: "tokenIn", type: "address" },
                    { name: "tokenOut", type: "address" },
                    { name: "amountIn", type: "uint256" },
                    { name: "fee", type: "uint24" },
                    { name: "sqrtPriceLimitX96", type: "uint160" },
                ],
            }],
        outputs: [
            { name: "amountOut", type: "uint256" },
            { name: "sqrtPriceX96After", type: "uint160" },
            { name: "initializedTicksCrossed", type: "uint32" },
            { name: "gasEstimate", type: "uint256" },
        ],
    },
];
exports.SWAP_ROUTER02_ABI = [
    {
        type: "function", name: "exactInputSingle", stateMutability: "payable",
        inputs: [{
                name: "params", type: "tuple", components: [
                    { name: "tokenIn", type: "address" },
                    { name: "tokenOut", type: "address" },
                    { name: "fee", type: "uint24" },
                    { name: "recipient", type: "address" },
                    { name: "amountIn", type: "uint256" },
                    { name: "amountOutMinimum", type: "uint256" },
                    { name: "sqrtPriceLimitX96", type: "uint160" },
                ],
            }],
        outputs: [{ name: "amountOut", type: "uint256" }],
    },
];
exports.ERC20_ABI = [
    { type: "function", name: "name", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
    { type: "function", name: "symbol", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
    { type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
    { type: "function", name: "totalSupply", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
    { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ type: "address" }], outputs: [{ type: "uint256" }] },
    { type: "function", name: "allowance", stateMutability: "view", inputs: [{ type: "address" }, { type: "address" }], outputs: [{ type: "uint256" }] },
    { type: "function", name: "approve", stateMutability: "nonpayable", inputs: [{ type: "address" }, { type: "uint256" }], outputs: [{ type: "bool" }] },
];
exports.REGISTRY_ABI = [
    {
        type: "event", name: "MarketRegistered", inputs: [
            { name: "marketId", type: "bytes32", indexed: true },
            { name: "dexType", type: "uint8", indexed: true },
            { name: "pool", type: "address", indexed: true },
            { name: "token0", type: "address", indexed: false },
            { name: "token1", type: "address", indexed: false },
            { name: "sponsor", type: "address", indexed: false },
            { name: "metadataURI", type: "string", indexed: false },
        ],
    },
    {
        type: "function", name: "getMarket", stateMutability: "view",
        inputs: [{ name: "marketId", type: "bytes32" }],
        outputs: [{
                type: "tuple", components: [
                    { name: "marketId", type: "bytes32" },
                    { name: "chainId", type: "uint256" },
                    { name: "dexType", type: "uint8" },
                    { name: "pool", type: "address" },
                    { name: "token0", type: "address" },
                    { name: "token1", type: "address" },
                    { name: "uniV3Fee", type: "uint24" },
                    { name: "aerodromeStable", type: "bool" },
                    { name: "sponsor", type: "address" },
                    { name: "createdAt", type: "uint64" },
                    { name: "metadataURI", type: "string" },
                    { name: "status", type: "uint8" },
                ],
            }],
    },
];


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OracleService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OracleService = void 0;
const common_1 = __webpack_require__(3);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
let OracleService = OracleService_1 = class OracleService {
    logger = new common_1.Logger(OracleService_1.name);
    cache = new Map();
    TTL_MS = 5000;
    async getSpotPrice(params) {
        const cacheKey = `${params.chainId}:${params.poolAddress}:spot`;
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.updatedAt < this.TTL_MS) {
            return cached.price;
        }
        try {
            const client = (0, chains_1.getClient)(params.chainId);
            const slot0 = (await client.readContract({
                address: params.poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                functionName: "slot0",
            }));
            const sqrtPriceX96 = slot0[0];
            const sqrtPrice = Number(sqrtPriceX96) / 2 ** 96;
            let rawPrice = sqrtPrice * sqrtPrice;
            // slot0 returns token1/token0
            let price;
            if (params.baseToken === "token0") {
                // Want token0 in token1 terms → invert
                price = rawPrice > 0 ? 1 / rawPrice : 0;
            }
            else {
                // Want token1 in token0 terms → use directly
                price = rawPrice;
            }
            this.cache.set(cacheKey, { price, updatedAt: Date.now() });
            return price;
        }
        catch (e) {
            this.logger.error(`Oracle spot failed for ${params.poolAddress}: ${e}`);
            return cached?.price ?? 0;
        }
    }
    async getMarketPrice(market) {
        const baseIsToken0 = market.token0Address.toLowerCase() === market.baseToken.toLowerCase();
        return this.getSpotPrice({
            chainId: market.chainId,
            poolAddress: market.poolAddress,
            token0: market.token0Address,
            token1: market.token1Address,
            baseToken: baseIsToken0 ? "token0" : "token1",
        });
    }
    invalidateCache(chainId, poolAddress) {
        this.cache.delete(`${chainId}:${poolAddress}:spot`);
    }
};
exports.OracleService = OracleService;
exports.OracleService = OracleService = OracleService_1 = __decorate([
    (0, common_1.Injectable)()
], OracleService);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CandleService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CandleService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
let CandleService = class CandleService {
    static { CandleService_1 = this; }
    prisma;
    logger = new common_1.Logger(CandleService_1.name);
    // Standard intervals in seconds
    static INTERVALS = {
        "1m": 60,
        "5m": 300,
        "15m": 900,
        "1h": 3600,
        "4h": 14400,
        "1d": 86400,
    };
    constructor(prisma) {
        this.prisma = prisma;
    }
    /**
     * Build candles from swap events for a market.
     * Processes un-candled swaps and aggregates them into OHLCV.
     */
    async buildCandles(marketId, poolAddress) {
        let built = 0;
        for (const [interval, secs] of Object.entries(CandleService_1.INTERVALS)) {
            // Find the latest candle time for this interval
            const lastCandle = await this.prisma.candle.findFirst({
                where: { marketId, interval },
                orderBy: { openTime: "desc" },
                select: { openTime: true },
            });
            const fromTime = lastCandle ? lastCandle.openTime + secs : 0;
            // Fetch swaps after the last candle time
            const swaps = await this.prisma.swap.findMany({
                where: {
                    poolAddress,
                    createdAt: { gte: new Date(fromTime * 1000) },
                },
                orderBy: { createdAt: "asc" },
            });
            if (swaps.length === 0)
                continue;
            // Group swaps by candle interval
            const groups = new Map();
            for (const swap of swaps) {
                const bucket = Math.floor((swap.blockTimestamp || 0) / secs) * secs;
                if (!groups.has(bucket))
                    groups.set(bucket, []);
                groups.get(bucket).push(swap);
            }
            // Build candles
            for (const [openTime, bucketSwaps] of groups) {
                const candle = this.aggregateCandle(marketId, interval, openTime, bucketSwaps);
                if (candle) {
                    try {
                        await this.prisma.candle.upsert({
                            where: { marketId_interval_openTime: { marketId, interval, openTime } },
                            update: {
                                high: candle.high,
                                low: candle.low,
                                close: candle.close,
                                volumeBase: candle.volumeBase,
                                volumeQuote: candle.volumeQuote,
                                tradeCount: candle.tradeCount,
                            },
                            create: candle,
                        });
                        built++;
                    }
                    catch (e) {
                        this.logger.warn(`Candle upsert failed: ${e}`);
                    }
                }
            }
        }
        return built;
    }
    aggregateCandle(marketId, interval, openTime, swaps) {
        if (swaps.length === 0)
            return null;
        const first = swaps[0];
        const last = swaps[swaps.length - 1];
        let high = 0;
        let low = Infinity;
        let volumeBase = 0;
        let volumeQuote = 0;
        for (const s of swaps) {
            const price = s.price || 0;
            if (price > high)
                high = price;
            if (price < low)
                low = price;
            // Volume: amountIn is in token-in units (varies per swap)
            // Use absolute value of amount0/amount1
            const amount0 = parseFloat(s.amount0 || "0");
            const amount1 = parseFloat(s.amount1 || "0");
            volumeBase += Math.abs(amount0);
            volumeQuote += Math.abs(amount1);
        }
        return {
            marketId,
            interval,
            openTime,
            open: first.price || 0,
            high,
            low: low === Infinity ? first.price || 0 : low,
            close: last.price || 0,
            volumeBase,
            volumeQuote,
            tradeCount: swaps.length,
        };
    }
    /**
     * Get candles for a market.
     */
    async getCandles(marketId, interval, limit = 100) {
        return this.prisma.candle.findMany({
            where: { marketId, interval },
            orderBy: { openTime: "desc" },
            take: limit,
        });
    }
};
exports.CandleService = CandleService;
exports.CandleService = CandleService = CandleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], CandleService);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TokenService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
let TokenService = TokenService_1 = class TokenService {
    prisma;
    logger = new common_1.Logger(TokenService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async fetchAndUpsert(chainId, address) {
        const existing = await this.prisma.token.findFirst({
            where: { chainId, address },
        });
        if (existing)
            return existing;
        const client = (0, chains_1.getClient)(chainId);
        try {
            const [symbol, name, decimals, totalSupply] = await Promise.all([
                client.readContract({ address: address, abi: abis_1.ERC20_ABI, functionName: "symbol" }),
                client.readContract({ address: address, abi: abis_1.ERC20_ABI, functionName: "name" }),
                client.readContract({ address: address, abi: abis_1.ERC20_ABI, functionName: "decimals" }),
                client.readContract({ address: address, abi: abis_1.ERC20_ABI, functionName: "totalSupply" }),
            ]);
            return this.prisma.token.create({
                data: {
                    chainId,
                    address,
                    symbol: symbol,
                    name: name,
                    decimals: decimals,
                    totalSupply: totalSupply.toString(),
                    verified: false,
                },
            });
        }
        catch (e) {
            this.logger.warn(`Failed to fetch token ${address}: ${e}`);
            return null;
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = TokenService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], TokenService);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PoolService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoolService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
let PoolService = PoolService_1 = class PoolService {
    prisma;
    logger = new common_1.Logger(PoolService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async syncPool(chainId, poolAddress, dexType) {
        const client = (0, chains_1.getClient)(chainId);
        const [slot0, liquidity, token0, token1] = await Promise.all([
            client.readContract({
                address: poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                functionName: "slot0",
            }),
            client.readContract({
                address: poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                functionName: "liquidity",
            }),
            client.readContract({
                address: poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                functionName: "token0",
            }),
            client.readContract({
                address: poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                functionName: "token1",
            }),
        ]);
        const s = slot0;
        return this.prisma.pool.upsert({
            where: { chainId_poolAddress: { chainId, poolAddress } },
            update: {
                sqrtPriceX96: s[0].toString(),
                tick: Number(s[1]),
                liquidityUsd: 0, // would need oracle price feed
                reserve0: "0",
                reserve1: "0",
            },
            create: {
                chainId,
                dexType,
                poolAddress,
                token0Address: token0,
                token1Address: token1,
                sqrtPriceX96: s[0].toString(),
                tick: Number(s[1]),
            },
        });
    }
};
exports.PoolService = PoolService;
exports.PoolService = PoolService = PoolService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PoolService);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PoolDiscoveryService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoolDiscoveryService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const chains_1 = __webpack_require__(13);
let PoolDiscoveryService = PoolDiscoveryService_1 = class PoolDiscoveryService {
    prisma;
    logger = new common_1.Logger(PoolDiscoveryService_1.name);
    // Uniswap V3 Factory events
    UNI_FACTORY_ABI = [
        {
            type: "event", name: "PoolCreated",
            inputs: [
                { name: "token0", type: "address", indexed: true },
                { name: "token1", type: "address", indexed: true },
                { name: "fee", type: "uint24", indexed: true },
                { name: "tickSpacing", type: "int24", indexed: false },
                { name: "pool", type: "address", indexed: false },
            ],
        },
    ];
    // Aerodrome Factory events
    AERO_FACTORY_ABI = [
        {
            type: "event", name: "PoolCreated",
            inputs: [
                { name: "token0", type: "address", indexed: true },
                { name: "token1", type: "address", indexed: true },
                { name: "stable", type: "bool", indexed: false },
                { name: "pool", type: "address", indexed: false },
            ],
        },
    ];
    constructor(prisma) {
        this.prisma = prisma;
    }
    /**
     * Discover new pools from Uniswap V3 factory events.
     * Scans from the last indexed block.
     */
    async discoverUniV3(chainId, fromBlock) {
        const client = (0, chains_1.getClient)(chainId);
        const addr = chains_1.ADDRESSES[chainId];
        const factory = addr.uniV3Factory;
        const head = await client.getBlockNumber();
        const start = fromBlock ?? head - 50000n; // Default: last ~7 days
        this.logger.log(`Scanning UniV3 PoolCreated from ${start} to ${head}`);
        let discovered = 0;
        // Paginate events (max 10k per query)
        const batchSize = 10000n;
        let from = start;
        while (from <= head) {
            const to = from + batchSize < head ? from + batchSize : head;
            try {
                const logs = await client.getContractEvents({
                    address: factory,
                    abi: this.UNI_FACTORY_ABI,
                    eventName: "PoolCreated",
                    fromBlock: from,
                    toBlock: to,
                });
                for (const log of logs) {
                    const { token0, token1, fee, pool } = log.args;
                    await this.upsertPool(chainId, "UNISWAP_V3", pool, token0, token1, Number(fee));
                    discovered++;
                }
            }
            catch (e) {
                this.logger.warn(`Batch ${from}-${to} failed: ${e}`);
            }
            from = to + 1n;
        }
        this.logger.log(`UniV3: ${discovered} pools discovered`);
        return discovered;
    }
    /**
     * Discover new pools from Aerodrome factory events.
     */
    async discoverAerodrome(chainId, fromBlock) {
        const client = (0, chains_1.getClient)(chainId);
        const addr = chains_1.ADDRESSES[chainId];
        const factory = addr.aerodromeFactory;
        const head = await client.getBlockNumber();
        const start = fromBlock ?? head - 50000n;
        this.logger.log(`Scanning Aerodrome PoolCreated from ${start} to ${head}`);
        let discovered = 0;
        const batchSize = 10000n;
        let from = start;
        while (from <= head) {
            const to = from + batchSize < head ? from + batchSize : head;
            try {
                const logs = await client.getContractEvents({
                    address: factory,
                    abi: this.AERO_FACTORY_ABI,
                    eventName: "PoolCreated",
                    fromBlock: from,
                    toBlock: to,
                });
                for (const log of logs) {
                    const { token0, token1, pool } = log.args;
                    const stable = log.args.stable;
                    await this.upsertPool(chainId, "AERODROME", pool, token0, token1, 0, stable);
                    discovered++;
                }
            }
            catch (e) {
                this.logger.warn(`Batch ${from}-${to} failed: ${e}`);
            }
            from = to + 1n;
        }
        this.logger.log(`Aerodrome: ${discovered} pools discovered`);
        return discovered;
    }
    /**
     * Discover pools from both factories.
     */
    async discoverAll(chainId) {
        const [uniV3, aerodrome] = await Promise.all([
            this.discoverUniV3(chainId),
            this.discoverAerodrome(chainId),
        ]);
        return { uniV3, aerodrome };
    }
    /**
     * Upsert a pool record and fetch token metadata.
     */
    async upsertPool(chainId, dexType, poolAddress, token0, token1, fee, stable = false) {
        const addr = poolAddress.toLowerCase();
        const t0 = token0.toLowerCase();
        const t1 = token1.toLowerCase();
        try {
            await this.prisma.pool.upsert({
                where: { chainId_poolAddress: { chainId, poolAddress: addr } },
                update: { fee: fee || undefined, stable },
                create: {
                    chainId,
                    dexType,
                    poolAddress: addr,
                    token0Address: t0,
                    token1Address: t1,
                    fee: fee || null,
                    stable,
                },
            });
        }
        catch (e) {
            // Duplicate — ok
        }
        // Fetch token metadata for new tokens
        await this.fetchTokenMeta(chainId, t0);
        await this.fetchTokenMeta(chainId, t1);
    }
    /**
     * Fetch token metadata (symbol, name, decimals) from chain.
     */
    async fetchTokenMeta(chainId, address) {
        try {
            const existing = await this.prisma.token.findUnique({
                where: { chainId_address: { chainId, address } },
            });
            if (existing?.symbol)
                return; // Already have metadata
            const client = (0, chains_1.getClient)(chainId);
            const erc20Abi = [
                { type: "function", name: "name", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
                { type: "function", name: "symbol", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
                { type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
            ];
            const [name, symbol, decimals] = await Promise.allSettled([
                client.readContract({ address: address, abi: erc20Abi, functionName: "name" }),
                client.readContract({ address: address, abi: erc20Abi, functionName: "symbol" }),
                client.readContract({ address: address, abi: erc20Abi, functionName: "decimals" }),
            ]);
            const meta = {};
            if (name.status === "fulfilled")
                meta.name = String(name.value).slice(0, 50);
            if (symbol.status === "fulfilled")
                meta.symbol = String(symbol.value).slice(0, 20);
            if (decimals.status === "fulfilled")
                meta.decimals = Number(decimals.value);
            if (meta.symbol || meta.name) {
                await this.prisma.token.upsert({
                    where: { chainId_address: { chainId, address } },
                    update: meta,
                    create: { chainId, address, ...meta },
                });
                this.logger.debug(`Fetched token: ${meta.symbol || address.slice(0, 8)}`);
            }
        }
        catch (e) {
            this.logger.debug(`Token meta fetch failed for ${address.slice(0, 8)}: ${e}`);
        }
    }
};
exports.PoolDiscoveryService = PoolDiscoveryService;
exports.PoolDiscoveryService = PoolDiscoveryService = PoolDiscoveryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PoolDiscoveryService);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapService = void 0;
const common_1 = __webpack_require__(3);
const viem_1 = __webpack_require__(9);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
// Aerodrome Router ABI (simplified)
const AERO_ROUTER_ABI = [
    {
        type: "function", name: "swapExactTokensForTokens",
        stateMutability: "nonpayable",
        inputs: [
            { name: "amountIn", type: "uint256" },
            { name: "amountOutMin", type: "uint256" },
            { name: "routes", type: "tuple[]", components: [
                    { name: "from", type: "address" },
                    { name: "to", type: "address" },
                    { name: "stable", type: "bool" },
                ] },
            { name: "to", type: "address" },
            { name: "deadline", type: "uint256" },
        ],
        outputs: [{ type: "uint256[]" }],
    },
];
let SwapService = class SwapService {
    async buildUniV3Swap(p) {
        const addr = chains_1.ADDRESSES[p.chainId];
        const router = addr.uniV3SwapRouter02;
        const data = (0, viem_1.encodeFunctionData)({
            abi: abis_1.SWAP_ROUTER02_ABI,
            functionName: "exactInputSingle",
            args: [{
                    tokenIn: p.tokenIn,
                    tokenOut: p.tokenOut,
                    fee: p.fee,
                    recipient: p.wallet,
                    amountIn: p.amountIn,
                    amountOutMinimum: p.minAmountOut,
                    sqrtPriceLimitX96: 0n,
                }],
        });
        const client = (0, chains_1.getClient)(p.chainId);
        const allowance = await client.readContract({
            address: p.tokenIn,
            abi: abis_1.ERC20_ABI,
            functionName: "allowance",
            args: [p.wallet, router],
        });
        return {
            to: router,
            value: "0",
            data,
            chainId: p.chainId,
            approvalRequired: allowance < p.amountIn,
            approval: allowance < p.amountIn
                ? { token: p.tokenIn, spender: router, amount: p.amountIn.toString() }
                : null,
        };
    }
    async buildAerodromeSwap(p) {
        const addr = chains_1.ADDRESSES[p.chainId];
        const router = addr.aerodromeRouter;
        const client = (0, chains_1.getClient)(p.chainId);
        const deadline = BigInt(Math.floor(Date.now() / 1000) + 1800); // 30 min
        const data = (0, viem_1.encodeFunctionData)({
            abi: AERO_ROUTER_ABI,
            functionName: "swapExactTokensForTokens",
            args: [
                p.amountIn,
                p.minAmountOut,
                [{ from: p.tokenIn, to: p.tokenOut, stable: p.stable }],
                p.wallet,
                deadline,
            ],
        });
        const allowance = await client.readContract({
            address: p.tokenIn,
            abi: abis_1.ERC20_ABI,
            functionName: "allowance",
            args: [p.wallet, router],
        });
        return {
            to: router,
            value: "0",
            data,
            chainId: p.chainId,
            approvalRequired: allowance < p.amountIn,
            approval: allowance < p.amountIn
                ? { token: p.tokenIn, spender: router, amount: p.amountIn.toString() }
                : null,
        };
    }
};
exports.SwapService = SwapService;
exports.SwapService = SwapService = __decorate([
    (0, common_1.Injectable)()
], SwapService);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IndexerService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IndexerService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const chains_1 = __webpack_require__(13);
const abis_1 = __webpack_require__(16);
let IndexerService = IndexerService_1 = class IndexerService {
    prisma;
    logger = new common_1.Logger(IndexerService_1.name);
    lastBlock = {};
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        if (process.env.INDEXER_ENABLED === "true") {
            setInterval(() => this.tick(8453).catch((e) => this.logger.error(e)), 120_000);
            this.logger.log("Indexer enabled (2 min interval)");
        }
        else {
            this.logger.log("Indexer disabled — set INDEXER_ENABLED=true to enable");
        }
    }
    async tick(chainId) {
        const client = (0, chains_1.getClient)(chainId);
        const head = await client.getBlockNumber();
        const pools = await this.prisma.pool.findMany({
            where: { chainId },
            select: { poolAddress: true },
        });
        for (const { poolAddress } of pools) {
            const key = `${chainId}:${poolAddress}`;
            const from = this.lastBlock[key] ?? head - 1000n;
            if (from >= head)
                continue;
            const logs = await client.getContractEvents({
                address: poolAddress,
                abi: abis_1.UNIV3_POOL_ABI,
                eventName: "Swap",
                fromBlock: from + 1n,
                toBlock: head,
            });
            for (const log of logs) {
                await this.processSwap(chainId, poolAddress, log);
            }
            this.lastBlock[key] = head;
        }
    }
    async processSwap(chainId, poolAddress, log) {
        const { sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick } = log.args;
        const side = amount0 > 0n ? "SELL" : "BUY";
        const amountIn = side === "SELL" ? amount0 : amount1;
        const amountOut = side === "SELL" ? amount1 : amount0;
        const price = amountOut !== 0n ? Math.abs(Number(amountIn) / Number(amountOut)) : 0;
        try {
            await this.prisma.swap.create({
                data: {
                    chainId,
                    dexType: "UNISWAP_V3",
                    poolAddress,
                    txHash: log.transactionHash,
                    blockNumber: Number(log.blockNumber),
                    blockTimestamp: log.blockNumber ? Number(log.blockNumber) : 0,
                    sender: sender,
                    recipient: recipient,
                    tokenIn: "",
                    tokenOut: "",
                    amountIn: amountIn.toString(),
                    amountOut: amountOut.toString(),
                    price,
                    side,
                },
            });
        }
        catch (e) {
            this.logger.warn(`Skipping duplicate swap: ${log.transactionHash}`);
        }
    }
};
exports.IndexerService = IndexerService;
exports.IndexerService = IndexerService = IndexerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], IndexerService);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EventsGateway_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsGateway = void 0;
const websockets_1 = __webpack_require__(25);
const socket_io_1 = __webpack_require__(26);
const common_1 = __webpack_require__(3);
let EventsGateway = EventsGateway_1 = class EventsGateway {
    server;
    logger = new common_1.Logger(EventsGateway_1.name);
    handleConnection(client) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleSubscribeMarket(client, marketId) {
        client.join(`market:${marketId}`);
        this.logger.log(`Client ${client.id} subscribed to market ${marketId}`);
    }
    handleUnsubscribeMarket(client, marketId) {
        client.leave(`market:${marketId}`);
    }
    emitTicker(marketId, ticker) {
        this.server.to(`market:${marketId}`).emit("ticker", ticker);
    }
    emitTrade(marketId, trade) {
        this.server.to(`market:${marketId}`).emit("trade", trade);
    }
    emitOrderbook(marketId, orderbook) {
        this.server.to(`market:${marketId}`).emit("orderbook", orderbook);
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("subscribe:market"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleSubscribeMarket", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("unsubscribe:market"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, String]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleUnsubscribeMarket", null);
exports.EventsGateway = EventsGateway = EventsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: "*" } })
], EventsGateway);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnsController = void 0;
const common_1 = __webpack_require__(3);
const express_1 = __webpack_require__(28);
let EnsController = class EnsController {
    setup(res) {
        res.send(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>ENS Setup</title>
<style>
body{font-family:system-ui;max-width:460px;margin:60px auto;background:#0f0f14;color:#e4e4e7;padding:24px}
h2{color:#a78bfa}button{padding:14px 26px;font-size:15px;border:none;border-radius:8px;cursor:pointer;margin:8px 8px 0 0}
.b1{background:#3b3b4a;color:#eee}.b2{background:#22c55e;color:#000;font-weight:600}
.b2:disabled{opacity:0.4}#s{margin-top:16px;font-size:13px;color:#9ca3af}a{color:#a78bfa}
</style></head><body>
<h2>Set IPFS — mirrorbook.eth</h2>
<p>Bind IPFS content hash to ENS domain</p>
<button class="b1" onclick="c()">Connect MetaMask</button>
<button class="b2" id="b2" onclick="h()" disabled>Set Content Hash</button>
<p id="s"></p>
<script>
var a="";function p(m){document.getElementById("s").textContent=m}
async function c(){
  var e=window.ethereum;if(!e){p("No MetaMask");return}
  try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]})}catch(e){}
  try{var r=await e.request({method:"eth_requestAccounts"});a=r[0];p("Ok: "+a.slice(0,8)+"...");document.getElementById("b2").disabled=false}catch(e){p("Rejected")}
}
async function h(){
  p("Confirm in MetaMask...");
  try{
    var h=await ethereum.request({method:"eth_sendTransaction",params:[{to:"0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63",from:a,value:"0x00",data:"0x304e6adecf653eddf01e6a461511c80e25eeab60a5b8150ff0822279d3bf3eb1ae5781b500000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000023e51220e33b1ef1f6eba4000dc7fea2886ad2a90c23f1aee2d87ee8e55b98e2d9db1ff20000000000000000000000000000000000000000000000000000000000"}]});
    document.getElementById("s").innerHTML="<span style='color:#22c55e'>DONE!</span> <a href='https://etherscan.io/tx/"+h+"' target='_blank'>View tx</a><br><br>mirrorbook.eth.limo is live!";
  }catch(e){p(e.message&&e.message.indexOf("rejected")>=0?"Rejected":"Error: "+(e.message||e))}
}
</script></body></html>`);
    }
};
exports.EnsController = EnsController;
__decorate([
    (0, common_1.Get)("setup"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], EnsController.prototype, "setup", null);
exports.EnsController = EnsController = __decorate([
    (0, common_1.Controller)("ens")
], EnsController);


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OracleFeedService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OracleFeedService = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
const viem_1 = __webpack_require__(9);
const chains_1 = __webpack_require__(10);
const accounts_1 = __webpack_require__(30);
const market_service_1 = __webpack_require__(8);
const prisma_service_1 = __webpack_require__(5);
let OracleFeedService = OracleFeedService_1 = class OracleFeedService {
    marketService;
    prisma;
    logger = new common_1.Logger(OracleFeedService_1.name);
    wallet = null;
    publicClient = null;
    oracleAddress = null;
    enabled = false;
    failedCount = 0;
    consecutiveFailures = 0;
    lastRun = 0;
    lastPrices = new Map();
    chainId = 1;
    PRICE_CHANGE_THRESHOLD = 0.002; // 0.2%
    constructor(marketService, prisma) {
        this.marketService = marketService;
        this.prisma = prisma;
    }
    async onModuleInit() {
        const pk = process.env.ORACLE_FEEDER_PRIVATE_KEY;
        const rpc = process.env.ORACLE_RPC_URL;
        const addr = process.env.ORACLE_CONTRACT_ADDRESS;
        const chainId = parseInt(process.env.ORACLE_CHAIN_ID || "1");
        this.chainId = chainId;
        const enabledFlag = process.env.ORACLE_ENABLED !== "false";
        if (!pk || !addr) {
            this.logger.warn("Oracle not configured — set ORACLE_FEEDER_PRIVATE_KEY and ORACLE_CONTRACT_ADDRESS in .env");
            return;
        }
        const chain = chainId === 8453 ? chains_1.base : chainId === 84532 ? chains_1.baseSepolia : chainId === 11155111 ? chains_1.sepolia : chains_1.mainnet;
        const account = (0, accounts_1.privateKeyToAccount)(pk.startsWith("0x") ? pk : `0x${pk}`);
        this.publicClient = (0, viem_1.createPublicClient)({
            chain,
            transport: (0, viem_1.http)(rpc || undefined),
        });
        this.wallet = (0, viem_1.createWalletClient)({
            chain,
            transport: (0, viem_1.http)(rpc || undefined),
            account,
        });
        this.oracleAddress = addr.startsWith("0x") ? addr : `0x${addr}`;
        this.enabled = enabledFlag;
        this.logger.log(`OracleFeed initialized — address: ${account.address} → contract: ${addr}`);
        if (!enabledFlag)
            this.logger.warn("Oracle is DISABLED — set ORACLE_ENABLED=true to activate");
    }
    // ---------------------------------------------------------------
    // Cron — every 5 minutes
    // ---------------------------------------------------------------
    async pushPrices() {
        if (!this.enabled || !this.wallet || !this.oracleAddress || !this.publicClient)
            return;
        if (Date.now() - this.lastRun < 45000)
            return;
        this.lastRun = Date.now();
        try {
            const entries = await this.collectPrices();
            if (entries.length === 0)
                return;
            // Push only prices that changed significantly (saves gas)
            const changed = entries.filter(e => {
                const last = this.lastPrices.get(e.marketId);
                if (last === undefined)
                    return true;
                if (last === 0n)
                    return true;
                const delta = e.price > last ? e.price - last : last - e.price;
                return Number(delta) / Number(last) > this.PRICE_CHANGE_THRESHOLD;
            });
            if (changed.length === 0)
                return;
            const ids = changed.map(e => e.marketId);
            const prices = changed.map(e => e.price);
            this.logger.debug(`Pushing ${ids.length} prices to oracle...`);
            let lastHash = "";
            for (let i = 0; i < ids.length; i++) {
                const feedData = (0, viem_1.encodeFunctionData)({
                    abi: (0, viem_1.parseAbi)(["function feedPrice(bytes32 marketId, uint192 price)"]),
                    functionName: "feedPrice",
                    args: [ids[i], prices[i]],
                });
                const estGas = await this.publicClient.estimateGas({
                    account: this.wallet.account.address,
                    to: this.oracleAddress,
                    data: feedData,
                }).catch(() => 150000n);
                const h = await this.wallet.sendTransaction({
                    to: this.oracleAddress,
                    data: feedData,
                    gas: estGas + 20000n,
                });
                lastHash = h;
            }
            this.logger.log(`Oracle updated — ${ids.length} prices, tx: ${lastHash.slice(0, 14)}...`);
            this.consecutiveFailures = 0;
            for (const e of changed)
                this.lastPrices.set(e.marketId, e.price);
        }
        catch (err) {
            this.consecutiveFailures++;
            this.failedCount++;
            const msg = err?.shortMessage || err?.message || String(err);
            this.logger.error(`Oracle push failed (#${this.consecutiveFailures}): ${msg}`);
            if (this.consecutiveFailures >= 5 && this.consecutiveFailures % 5 === 0) {
                this.logger.warn(`${this.consecutiveFailures} consecutive oracle failures — check RPC/balance`);
            }
        }
    }
    // ---------------------------------------------------------------
    // Price collection
    // ---------------------------------------------------------------
    async collectPrices() {
        const result = await this.marketService.list({ limit: 500 });
        const entries = [];
        for (const market of result.items) {
            if (market.chainId !== this.chainId)
                continue; // only push markets on the oracle's chain
            try {
                const ticker = await this.marketService.getTicker(market.marketId);
                if (!ticker || ticker.lastPrice === "0.0")
                    continue;
                const priceWad = this.toWad(ticker.lastPrice);
                if (priceWad === 0n)
                    continue;
                // Convert marketId string to bytes32 via left-padded hex
                const idBytes = Buffer.from(market.marketId.padEnd(32, ' ').slice(0, 32), 'utf-8');
                const marketIdBytes32 = ('0x' + idBytes.toString('hex').padEnd(64, '0'));
                entries.push({
                    marketId: marketIdBytes32,
                    price: priceWad,
                });
            }
            catch {
                // skip market with errors
            }
        }
        return entries;
    }
    // ---------------------------------------------------------------
    // Utility
    // ---------------------------------------------------------------
    toWad(price) {
        try {
            const num = parseFloat(price);
            if (isNaN(num) || num <= 0)
                return 0n;
            return BigInt(Math.floor(num * 1e18));
        }
        catch {
            return 0n;
        }
    }
    // ---------------------------------------------------------------
    // Diagnostics (exposed for controller)
    // ---------------------------------------------------------------
    getStatus() {
        return {
            enabled: this.enabled,
            oracleAddress: this.oracleAddress,
            feederAddress: this.wallet?.account?.address ?? null,
            failedCount: this.failedCount,
            consecutiveFailures: this.consecutiveFailures,
            lastRun: this.lastRun ? new Date(this.lastRun).toISOString() : null,
        };
    }
    async manualPush(marketIds) {
        if (!this.enabled || !this.wallet || !this.oracleAddress || !this.publicClient) {
            return { ok: false, error: "Oracle not configured" };
        }
        const all = await this.collectPrices();
        const entries = marketIds
            ? all.filter(e => marketIds.some(m => e.marketId.includes(m)))
            : all;
        if (entries.length === 0)
            return { ok: true, pushed: 0 };
        const ids = entries.map(e => e.marketId);
        const prices = entries.map(e => e.price);
        let lastHash = "";
        for (let i = 0; i < ids.length; i++) {
            const feedData = (0, viem_1.encodeFunctionData)({
                abi: (0, viem_1.parseAbi)(["function feedPrice(bytes32 marketId, uint192 price)"]),
                functionName: "feedPrice",
                args: [ids[i], prices[i]],
            });
            const estGas = await this.publicClient.estimateGas({
                account: this.wallet.account.address,
                to: this.oracleAddress,
                data: feedData,
            }).catch(() => 150000n);
            const h = await this.wallet.sendTransaction({
                to: this.oracleAddress,
                data: feedData,
                gas: estGas + 20000n,
            });
            lastHash = h;
        }
        return { ok: true, pushed: entries.length, tx: lastHash };
    }
};
exports.OracleFeedService = OracleFeedService;
__decorate([
    (0, schedule_1.Cron)("*/300 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OracleFeedService.prototype, "pushPrices", null);
exports.OracleFeedService = OracleFeedService = OracleFeedService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof market_service_1.MarketService !== "undefined" && market_service_1.MarketService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], OracleFeedService);


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("viem/accounts");

/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OracleController = void 0;
const common_1 = __webpack_require__(3);
const oracle_feed_service_1 = __webpack_require__(29);
let OracleController = class OracleController {
    oracleFeed;
    constructor(oracleFeed) {
        this.oracleFeed = oracleFeed;
    }
    status() {
        return this.oracleFeed.getStatus();
    }
    async push(marketId) {
        const ids = marketId ? marketId.split(",") : undefined;
        return this.oracleFeed.manualPush(ids);
    }
};
exports.OracleController = OracleController;
__decorate([
    (0, common_1.Get)("status"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OracleController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("push"),
    __param(0, (0, common_1.Query)("marketId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OracleController.prototype, "push", null);
exports.OracleController = OracleController = __decorate([
    (0, common_1.Controller)("oracle"),
    __metadata("design:paramtypes", [typeof (_a = typeof oracle_feed_service_1.OracleFeedService !== "undefined" && oracle_feed_service_1.OracleFeedService) === "function" ? _a : Object])
], OracleController);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SwapController_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapController = void 0;
const common_1 = __webpack_require__(3);
const quote_service_1 = __webpack_require__(15);
const market_service_1 = __webpack_require__(8);
const viem_1 = __webpack_require__(9);
const SWAP_ROUTER = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
const SWAP_ROUTER_ABI = [{
        type: "function",
        name: "exactInputSingle",
        stateMutability: "payable",
        inputs: [{ name: "params", type: "tuple", components: [
                    { name: "tokenIn", type: "address" },
                    { name: "tokenOut", type: "address" },
                    { name: "fee", type: "uint24" },
                    { name: "recipient", type: "address" },
                    { name: "deadline", type: "uint256" },
                    { name: "amountIn", type: "uint256" },
                    { name: "amountOutMinimum", type: "uint256" },
                    { name: "sqrtPriceLimitX96", type: "uint160" },
                ] }],
        outputs: [{ name: "amountOut", type: "uint256" }],
    }];
let SwapController = SwapController_1 = class SwapController {
    quoteService;
    marketService;
    logger = new common_1.Logger(SwapController_1.name);
    constructor(quoteService, marketService) {
        this.quoteService = quoteService;
        this.marketService = marketService;
    }
    async getQuote(body) {
        try {
            const market = await this.marketService.getByMarketId(body.marketId);
            if (!market)
                return { error: "Market not found" };
            const tokenIn = body.side === "BUY" ? market.quoteToken : market.baseToken;
            const tokenOut = body.side === "BUY" ? market.baseToken : market.quoteToken;
            const decimalsIn = 18;
            const amountInWei = (0, viem_1.parseUnits)(body.amountIn || "0", decimalsIn).toString();
            try {
                const qs = new URLSearchParams({
                    chainId: String(market.chainId),
                    sellToken: tokenIn,
                    buyToken: tokenOut,
                    sellAmount: amountInWei,
                    slippageBps: String(body.slippageBps || 100),
                });
                const resp = await fetch("https://api.0x.org/swap/permit2/quote?" + qs, {
                    headers: { "0x-api-key": "1b" },
                });
                if (resp.ok) {
                    const data = await resp.json();
                    return { price: data.price, amountIn: data.sellAmount, amountOut: data.buyAmount, gas: data.gas, tx: data.transaction, source: "0x" };
                }
            }
            catch { }
            const ticker = await this.marketService.getTicker(body.marketId);
            const price = parseFloat(ticker?.lastPrice || "0");
            const amountOut = body.amountIn ? parseFloat(body.amountIn) * (body.side === "BUY" ? 1 / price : price) : 0;
            const slip = (body.slippageBps || 100) / 10000;
            const amountOutMin = amountOut * (1 - slip);
            const amountOutMinWei = (0, viem_1.parseUnits)(amountOutMin.toFixed(18), 18).toString();
            const deadline = Math.floor(Date.now() / 1000) + 1200;
            const recipient = (body.recipient || "0x0000000000000000000000000000000000000000");
            const txData = (0, viem_1.encodeFunctionData)({
                abi: SWAP_ROUTER_ABI,
                functionName: "exactInputSingle",
                args: [{
                        tokenIn: tokenIn,
                        tokenOut: tokenOut,
                        fee: 3000,
                        recipient,
                        deadline: BigInt(deadline),
                        amountIn: BigInt(amountInWei),
                        amountOutMinimum: BigInt(amountOutMinWei),
                        sqrtPriceLimitX96: BigInt(0),
                    }],
            });
            return { price: price.toFixed(8), amountIn: body.amountIn, amountOut: amountOut.toFixed(6), source: "uniswap_v3", tx: { to: SWAP_ROUTER, data: txData, value: "0x0" } };
        }
        catch (e) {
            this.logger.warn("Quote failed: " + e.message);
            return { error: "Quote unavailable" };
        }
    }
};
exports.SwapController = SwapController;
__decorate([
    (0, common_1.Post)("quote"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SwapController.prototype, "getQuote", null);
exports.SwapController = SwapController = SwapController_1 = __decorate([
    (0, common_1.Controller)("api/v1"),
    __metadata("design:paramtypes", [typeof (_a = typeof quote_service_1.QuoteService !== "undefined" && quote_service_1.QuoteService) === "function" ? _a : Object, typeof (_b = typeof market_service_1.MarketService !== "undefined" && market_service_1.MarketService) === "function" ? _b : Object])
], SwapController);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GasStationService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GasStationService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(5);
const viem_1 = __webpack_require__(9);
const chains_1 = __webpack_require__(10);
const accounts_1 = __webpack_require__(30);
const GAS_STATION = "0x81337bfa2c9d01d6543e91a7641258eeceff7cfe"; // deployed address
const ABI = [
    "function deposits(address) view returns (uint256)",
    "function chargeGas(address user)",
    "function satlPerSwap() view returns (uint256)",
];
let GasStationService = GasStationService_1 = class GasStationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    logger = new common_1.Logger(GasStationService_1.name);
    account = (0, accounts_1.privateKeyToAccount)((process.env.DEPLOYER_PK || "0x"));
    publicClient = (0, viem_1.createPublicClient)({
        chain: chains_1.mainnet,
        transport: (0, viem_1.http)(process.env.RPC_1 || "https://eth.llamarpc.com"),
    });
    walletClient = (0, viem_1.createWalletClient)({
        chain: chains_1.mainnet,
        transport: (0, viem_1.http)(process.env.RPC_1 || "https://eth.llamarpc.com"),
        account: this.account,
    });
    async getDeposit(user) {
        try {
            const raw = await this.publicClient.readContract({
                address: GAS_STATION,
                abi: ABI,
                functionName: "deposits",
                args: [user],
            });
            return (0, viem_1.formatUnits)(raw, 18);
        }
        catch {
            return "0";
        }
    }
    async chargeGas(user) {
        try {
            await this.walletClient.writeContract({
                chain: chains_1.mainnet,
                account: this.account,
                address: GAS_STATION,
                abi: ABI,
                functionName: "chargeGas",
                args: [user],
            });
            return { ok: true };
        }
        catch (e) {
            this.logger.error("chargeGas: " + e.message);
            return { ok: false };
        }
    }
    encodeDeposit(amount) {
        const wei = BigInt(amount);
        const sel = "d0e30db0";
        return { to: GAS_STATION, data: "0x" + sel + wei.toString(16).padStart(64, "0") };
    }
    encodeWithdraw(amount) {
        const wei = BigInt(amount);
        const sel = "2e1a7d4d";
        return { to: GAS_STATION, data: "0x" + sel + wei.toString(16).padStart(64, "0") };
    }
    async getVolume(address) {
        // TODO: Calculate 30-day rolling volume from Trade table when implemented
        const usdVolume = 0; // stub — will track real swap volumes
        const tiers = [
            { name: "Free", min: 0, feeBps: 0 },
            { name: "Basic", min: 50, feeBps: 5 },
            { name: "Standard", min: 1000, feeBps: 10 },
            { name: "Pro", min: 5000, feeBps: 5 },
            { name: "Corporate", min: 10000, feeBps: 1 },
        ];
        let tier = tiers[0];
        for (const t of tiers) {
            if (usdVolume >= t.min)
                tier = t;
        }
        return { address, volumeUsd: usdVolume, tier: tier.name, feeBps: tier.feeBps };
    }
};
exports.GasStationService = GasStationService;
exports.GasStationService = GasStationService = GasStationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], GasStationService);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GasStationController = void 0;
const common_1 = __webpack_require__(3);
const gas_station_service_1 = __webpack_require__(33);
let GasStationController = class GasStationController {
    gas;
    constructor(gas) {
        this.gas = gas;
    }
    fees() {
        return {
            tiers: [
                { name: "Free", minVolumeUsd: 0, feeBps: 0 },
                { name: "Basic", minVolumeUsd: 1000, feeBps: 5 },
                { name: "Standard", minVolumeUsd: 10000, feeBps: 10 },
                { name: "Pro", minVolumeUsd: 100000, feeBps: 15 },
                { name: "Enterprise", minVolumeUsd: 1000000, feeBps: 20 },
            ],
            currency: "USD",
            ownerWallets: {
                satl: { chain: "Ethereum", address: "0x" + "0".repeat(40) },
                usdc: { chain: "Base", address: "0x" + "0".repeat(40) },
            },
            note: "Fees apply on trades exceeding the Free tier ($1,000 USD / 30 days). Tracked by rolling 30-day trade volume."
        };
    }
    async volume(address) {
        return this.gas.getVolume(address);
    }
    async balance(address) {
        return { balance: await this.gas.getDeposit(address) };
    }
    encodeDeposit(body) {
        return this.gas.encodeDeposit(body.amount);
    }
    encodeWithdraw(body) {
        return this.gas.encodeWithdraw(body.amount);
    }
    async charge(body) {
        return this.gas.chargeGas(body.user);
    }
};
exports.GasStationController = GasStationController;
__decorate([
    (0, common_1.Get)("fees"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GasStationController.prototype, "fees", null);
__decorate([
    (0, common_1.Get)("volume/:address"),
    __param(0, (0, common_1.Param)("address")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GasStationController.prototype, "volume", null);
__decorate([
    (0, common_1.Get)("balance/:address"),
    __param(0, (0, common_1.Param)("address")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GasStationController.prototype, "balance", null);
__decorate([
    (0, common_1.Post)("encode-deposit"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GasStationController.prototype, "encodeDeposit", null);
__decorate([
    (0, common_1.Post)("encode-withdraw"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GasStationController.prototype, "encodeWithdraw", null);
__decorate([
    (0, common_1.Post)("charge"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GasStationController.prototype, "charge", null);
exports.GasStationController = GasStationController = __decorate([
    (0, common_1.Controller)("api/v1/gas"),
    __metadata("design:paramtypes", [typeof (_a = typeof gas_station_service_1.GasStationService !== "undefined" && gas_station_service_1.GasStationService) === "function" ? _a : Object])
], GasStationController);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mt5Controller = void 0;
const common_1 = __webpack_require__(3);
const express_1 = __webpack_require__(28);
let Mt5Controller = class Mt5Controller {
    stream(res) {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.flushHeaders();
        const id = Date.now();
        res.write("data: " + JSON.stringify({ type: "connected", id }) + "\n\n");
        // Keep alive every 30s
        const keepAlive = setInterval(() => {
            res.write(": ping\n\n");
        }, 30000);
        // Store reference for price broadcasting
        global.mt5Streams = global.mt5Streams || [];
        global.mt5Streams.push(res);
        res.on("close", () => {
            clearInterval(keepAlive);
            global.mt5Streams = (global.mt5Streams || []).filter((r) => r !== res);
        });
    }
    symbols() {
        return {
            symbols: [
                { symbol: "SATL-WETH", base: "SATL", quote: "WETH", decimals: 8, minLot: 1 },
                { symbol: "WETH-USDC", base: "WETH", quote: "USDC", decimals: 2, minLot: 0.001 },
            ],
        };
    }
    tick(symbol) {
        // This should be connected to market service — placeholder
        return { symbol, bid: 0, ask: 0, time: Date.now() };
    }
};
exports.Mt5Controller = Mt5Controller;
__decorate([
    (0, common_1.Get)("stream"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], Mt5Controller.prototype, "stream", null);
__decorate([
    (0, common_1.Get)("symbols"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Mt5Controller.prototype, "symbols", null);
__decorate([
    (0, common_1.Get)("tick/:symbol"),
    __param(0, (0, common_1.Param)("symbol")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Mt5Controller.prototype, "tick", null);
exports.Mt5Controller = Mt5Controller = __decorate([
    (0, common_1.Controller)("api/v1/mt5")
], Mt5Controller);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MarketMakerService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketMakerService = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
const viem_1 = __webpack_require__(9);
const accounts_1 = __webpack_require__(30);
const chains_1 = __webpack_require__(10);
const chains_2 = __webpack_require__(13);
const NFPM_ABI = (0, viem_1.parseAbi)([
    "function mint((address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline)) returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)",
    "function increaseLiquidity((uint256 tokenId, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, uint256 deadline)) returns (uint128 liquidity, uint256 amount0, uint256 amount1)",
    "function decreaseLiquidity((uint256 tokenId, uint128 liquidity, uint256 amount0Min, uint256 amount1Min, uint256 deadline)) returns (uint256 amount0, uint256 amount1)",
    "function collect((uint256 tokenId, address recipient, uint128 amount0Max, uint128 amount1Max)) returns (uint256 amount0, uint256 amount1)",
    "function positions(uint256 tokenId) returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)",
    "function balanceOf(address owner) returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index) returns (uint256)",
]);
const POOL_ABI = (0, viem_1.parseAbi)([
    "function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)",
    "function token0() view returns (address)",
    "function token1() view returns (address)",
]);
const ERC20_ABI = (0, viem_1.parseAbi)([
    "function approve(address spender, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)",
]);
const CHAINS = { 1: chains_1.mainnet, 8453: chains_1.base, 43114: chains_1.avalanche };
let MarketMakerService = MarketMakerService_1 = class MarketMakerService {
    logger = new common_1.Logger(MarketMakerService_1.name);
    account = null;
    wallet = null;
    publicClient = null;
    poolAddress = "";
    chainId = 1;
    fee = 3000;
    rangeTicks = 200;
    amount0 = 0n;
    amount1 = 0n;
    enabled = false;
    lastRun = 0;
    constructor() {
        const pk = process.env.MM_PRIVATE_KEY || process.env.DEPLOYER_PK || "";
        if (!pk)
            return;
        try {
            this.account = (0, accounts_1.privateKeyToAccount)(pk.startsWith("0x") ? pk : `0x${pk}`);
        }
        catch {
            this.account = null;
        }
        this.chainId = parseInt(process.env.MM_CHAIN_ID || "1");
        this.poolAddress = (process.env.MM_POOL || "").toLowerCase();
        this.fee = parseInt(process.env.MM_FEE || "3000");
        this.rangeTicks = parseInt(process.env.MM_RANGE_PCT || "2") * 100;
        this.amount0 = BigInt(process.env.MM_AMOUNT0_WEI || "0");
        this.amount1 = BigInt(process.env.MM_AMOUNT1_WEI || "0");
        this.enabled = process.env.MM_ENABLED === "true";
        const rpc = process.env[`RPC_${this.chainId}`];
        const chain = CHAINS[this.chainId];
        if (!this.account || !this.poolAddress || !rpc || !chain) {
            this.enabled = false;
            if (process.env.MM_ENABLED === "true") {
                this.logger.warn("Market maker configured but missing MM_POOL / RPC / private key");
            }
            return;
        }
        this.publicClient = (0, viem_1.createPublicClient)({ chain, transport: (0, viem_1.http)(rpc) });
        this.wallet = (0, viem_1.createWalletClient)({ chain, transport: (0, viem_1.http)(rpc), account: this.account });
    }
    // ======================= Status =======================
    async status() {
        if (!this.publicClient || !this.poolAddress)
            return { enabled: false, reason: "not configured" };
        try {
            const slot0 = await this.publicClient.readContract({
                address: this.poolAddress, abi: POOL_ABI, functionName: "slot0",
            });
            const tick = slot0[1];
            const ts = Math.floor(this.fee / 50);
            const pos = await this.getOwnedPosition();
            return {
                enabled: this.enabled,
                chainId: this.chainId,
                pool: this.poolAddress,
                fee: this.fee,
                tick,
                tickSpacing: ts,
                rangePct: this.rangeTicks / 100,
                targetLower: Math.floor((tick - this.rangeTicks) / ts) * ts,
                targetUpper: Math.floor((tick + this.rangeTicks) / ts) * ts,
                wallet: this.account?.address,
                position: pos,
                configuredAmounts: { amount0: this.amount0.toString(), amount1: this.amount1.toString() },
            };
        }
        catch (e) {
            return { enabled: this.enabled, error: e?.message || String(e) };
        }
    }
    async getOwnedPosition() {
        if (!this.wallet)
            return null;
        try {
            const pm = chains_2.ADDRESSES[this.chainId]?.uniV3PositionManager;
            if (!pm)
                return null;
            const count = await this.publicClient.readContract({
                address: pm, abi: NFPM_ABI, functionName: "balanceOf", args: [this.account.address],
            });
            if (count === 0n)
                return null;
            const tokenId = await this.publicClient.readContract({
                address: pm, abi: NFPM_ABI, functionName: "tokenOfOwnerByIndex", args: [this.account.address, count - 1n],
            });
            const pos = await this.publicClient.readContract({
                address: pm, abi: NFPM_ABI, functionName: "positions", args: [tokenId],
            });
            return {
                tokenId: tokenId.toString(),
                token0: pos[2], token1: pos[3], fee: pos[4],
                tickLower: pos[5], tickUpper: pos[6],
                liquidity: pos[7].toString(),
                tokensOwed0: pos[10].toString(), tokensOwed1: pos[11].toString(),
            };
        }
        catch (e) {
            return { error: e?.message || String(e) };
        }
    }
    // ======================= Mint =======================
    async mint() {
        if (!this.enabled || !this.wallet)
            return { ok: false, error: "MM disabled or not configured" };
        const pm = chains_2.ADDRESSES[this.chainId]?.uniV3PositionManager;
        if (!pm)
            return { ok: false, error: "No position manager for chain" };
        try {
            const slot0 = await this.publicClient.readContract({
                address: this.poolAddress, abi: POOL_ABI, functionName: "slot0",
            });
            const tick = slot0[1];
            const ts = Math.floor(this.fee / 50);
            const tickLower = Math.floor((tick - this.rangeTicks) / ts) * ts;
            const tickUpper = Math.floor((tick + this.rangeTicks) / ts) * ts;
            const t0 = await this.publicClient.readContract({ address: this.poolAddress, abi: POOL_ABI, functionName: "token0" });
            const t1 = await this.publicClient.readContract({ address: this.poolAddress, abi: POOL_ABI, functionName: "token1" });
            if (this.amount0 > 0n)
                await this.ensureApprove(t0, pm, this.amount0);
            if (this.amount1 > 0n)
                await this.ensureApprove(t1, pm, this.amount1);
            const deadline = BigInt(Math.floor(Date.now() / 1000) + 600);
            const hash = await this.wallet.writeContract({
                address: pm,
                abi: NFPM_ABI,
                functionName: "mint",
                args: [{
                        token0: t0, token1: t1, fee: this.fee,
                        tickLower, tickUpper,
                        amount0Desired: this.amount0, amount1Desired: this.amount1,
                        amount0Min: (this.amount0 * 50n) / 100n, amount1Min: (this.amount1 * 50n) / 100n,
                        recipient: this.account.address, deadline,
                    }],
            });
            return { ok: true, hash, tickLower, tickUpper, tick, token0: t0, token1: t1 };
        }
        catch (e) {
            const msg = e?.shortMessage || e?.message || String(e);
            this.logger.error("MM mint failed: " + msg);
            return { ok: false, error: msg };
        }
    }
    async ensureApprove(token, spender, amount) {
        const current = await this.publicClient.readContract({
            address: token, abi: ERC20_ABI, functionName: "allowance", args: [this.account.address, spender],
        });
        if (current >= amount)
            return;
        await this.wallet.writeContract({
            address: token, abi: ERC20_ABI, functionName: "approve", args: [spender, amount],
        });
    }
    // ======================= Rebalance =======================
    async rebalance() {
        if (!this.enabled || !this.wallet)
            return { ok: false, error: "MM disabled" };
        const pos = await this.getOwnedPosition();
        if (!pos || pos.error)
            return this.mint();
        try {
            const slot0 = await this.publicClient.readContract({
                address: this.poolAddress, abi: POOL_ABI, functionName: "slot0",
            });
            const tick = slot0[1];
            const buffer = Math.floor(this.rangeTicks / 4);
            const inRange = tick >= Number(pos.tickLower) + buffer && tick <= Number(pos.tickUpper) - buffer;
            if (inRange) {
                return { ok: true, rebalanced: false, tick, reason: "in range", tickLower: pos.tickLower, tickUpper: pos.tickUpper };
            }
            await this.closePosition(pos);
            return this.mint();
        }
        catch (e) {
            return { ok: false, error: e?.shortMessage || e?.message || String(e) };
        }
    }
    async closePosition(pos) {
        const pm = chains_2.ADDRESSES[this.chainId]?.uniV3PositionManager;
        const max = 2n ** 128n - 1n;
        const deadline = BigInt(Math.floor(Date.now() / 1000) + 600);
        try {
            await this.wallet.writeContract({
                address: pm, abi: NFPM_ABI, functionName: "collect",
                args: [{ tokenId: BigInt(pos.tokenId), recipient: this.account.address, amount0Max: max, amount1Max: max }],
            });
        }
        catch { }
        if (BigInt(pos.liquidity) > 0n) {
            await this.wallet.writeContract({
                address: pm, abi: NFPM_ABI, functionName: "decreaseLiquidity",
                args: [{ tokenId: BigInt(pos.tokenId), liquidity: BigInt(pos.liquidity), amount0Min: 0n, amount1Min: 0n, deadline }],
            });
            await this.wallet.writeContract({
                address: pm, abi: NFPM_ABI, functionName: "collect",
                args: [{ tokenId: BigInt(pos.tokenId), recipient: this.account.address, amount0Max: max, amount1Max: max }],
            });
        }
    }
    // ======================= Cron =======================
    async autoRebalance() {
        if (!this.enabled)
            return;
        if (Date.now() - this.lastRun < 200000)
            return;
        this.lastRun = Date.now();
        const r = await this.rebalance();
        if (r && (r.error || r.rebalanced === true)) {
            this.logger.log(`MM: ${JSON.stringify(r).slice(0, 200)}`);
        }
    }
};
exports.MarketMakerService = MarketMakerService;
__decorate([
    (0, schedule_1.Cron)("*/300 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketMakerService.prototype, "autoRebalance", null);
exports.MarketMakerService = MarketMakerService = MarketMakerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MarketMakerService);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketMakerController = void 0;
const common_1 = __webpack_require__(3);
const mm_service_1 = __webpack_require__(36);
let MarketMakerController = class MarketMakerController {
    mm;
    constructor(mm) {
        this.mm = mm;
    }
    async status() {
        return this.mm.status();
    }
    async mint() {
        return this.mm.mint();
    }
    async rebalance() {
        return this.mm.rebalance();
    }
};
exports.MarketMakerController = MarketMakerController;
__decorate([
    (0, common_1.Get)("status"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketMakerController.prototype, "status", null);
__decorate([
    (0, common_1.Post)("mint"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketMakerController.prototype, "mint", null);
__decorate([
    (0, common_1.Post)("rebalance"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketMakerController.prototype, "rebalance", null);
exports.MarketMakerController = MarketMakerController = __decorate([
    (0, common_1.Controller)("api/v1/mm"),
    __metadata("design:paramtypes", [typeof (_a = typeof mm_service_1.MarketMakerService !== "undefined" && mm_service_1.MarketMakerService) === "function" ? _a : Object])
], MarketMakerController);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentsController = void 0;
const common_1 = __webpack_require__(3);
const market_service_1 = __webpack_require__(8);
let AgentsController = class AgentsController {
    marketService;
    constructor(marketService) {
        this.marketService = marketService;
    }
    async stats() {
        const result = await this.marketService.list({ limit: 500 });
        const pairs = [];
        for (const m of result.items) {
            if (m.chainId !== 8453)
                continue; // Base only (AI agents run on Base)
            let volume = 0;
            try {
                const ticker = await this.marketService.getTicker(m.marketId);
                volume = parseFloat(ticker?.volume24hBase || "0");
            }
            catch { }
            pairs.push({
                marketId: m.marketId,
                base: m.baseSymbol || m.token0Symbol || "?",
                quote: m.quoteSymbol || m.token1Symbol || "?",
                activeAgents: 0, // TODO: read from vault contract when agents launch
                totalBalance: 0, // TODO: sum of agents' deposits in vault
                incomeDay: 0, // TODO: aggregate agents' 24h PnL
                incomeMonth: 0, // TODO: aggregate agents' 30d PnL
                status: volume > 0 ? "active" : "no_trades",
                robots: 0, // TODO: read from robot registry (API robots)
            });
        }
        return { pairs };
    }
};
exports.AgentsController = AgentsController;
__decorate([
    (0, common_1.Get)("stats"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "stats", null);
exports.AgentsController = AgentsController = __decorate([
    (0, common_1.Controller)("api/v1/agents"),
    __metadata("design:paramtypes", [typeof (_a = typeof market_service_1.MarketService !== "undefined" && market_service_1.MarketService) === "function" ? _a : Object])
], AgentsController);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FreezeController = void 0;
const common_1 = __webpack_require__(3);
const freeze_service_1 = __webpack_require__(40);
let FreezeController = class FreezeController {
    freezeService;
    constructor(freezeService) {
        this.freezeService = freezeService;
    }
    async get(marketId) {
        return this.freezeService.getState(marketId);
    }
    async commit(marketId, body) {
        return this.freezeService.commit(marketId, body.user);
    }
    async pay(marketId, body) {
        return this.freezeService.pay(marketId, body.user);
    }
    async create(body) {
        return this.freezeService.createFreeze(body.marketId, body.chainId, body.amountUsd, body.reason);
    }
};
exports.FreezeController = FreezeController;
__decorate([
    (0, common_1.Get)(":marketId"),
    __param(0, (0, common_1.Param)("marketId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FreezeController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(":marketId/commit"),
    __param(0, (0, common_1.Param)("marketId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FreezeController.prototype, "commit", null);
__decorate([
    (0, common_1.Post)(":marketId/pay"),
    __param(0, (0, common_1.Param)("marketId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FreezeController.prototype, "pay", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FreezeController.prototype, "create", null);
exports.FreezeController = FreezeController = __decorate([
    (0, common_1.Controller)("api/v1/freeze"),
    __metadata("design:paramtypes", [typeof (_a = typeof freeze_service_1.FreezeService !== "undefined" && freeze_service_1.FreezeService) === "function" ? _a : Object])
], FreezeController);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FreezeService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FreezeService = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(5);
let FreezeService = FreezeService_1 = class FreezeService {
    prisma;
    logger = new common_1.Logger(FreezeService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getState(marketId) {
        const freeze = await this.prisma.marketFreeze.findUnique({
            where: { marketId },
            include: { contributions: true },
        });
        if (!freeze)
            return null;
        const committed = freeze.contributions.filter((c) => c.committed);
        const paid = freeze.contributions.filter((c) => c.paid);
        const perPerson = committed.length > 0 ? freeze.amountUsd / committed.length : freeze.amountUsd;
        return {
            marketId: freeze.marketId,
            chainId: freeze.chainId,
            reason: freeze.reason,
            amountUsd: freeze.amountUsd,
            phase: freeze.phase,
            status: freeze.status,
            signupDeadline: freeze.signupDeadline,
            paymentDeadline: freeze.paymentDeadline,
            committedCount: committed.length,
            paidCount: paid.length,
            perPerson,
            contributors: freeze.contributions.map((c) => ({ user: c.user, committed: c.committed, paid: c.paid, paidAt: c.paidAt })),
        };
    }
    async createFreeze(marketId, chainId, amountUsd, reason = "ORACLE_FEE_UNPAID") {
        const existing = await this.prisma.marketFreeze.findUnique({ where: { marketId } });
        if (existing)
            return { ok: false, error: "already frozen" };
        const now = new Date();
        await this.prisma.marketFreeze.create({
            data: {
                marketId, chainId, amountUsd, reason,
                phase: "signup",
                status: "frozen",
                signupDeadline: new Date(now.getTime() + 7 * 24 * 3600 * 1000),
            },
        });
        // Mark the market as frozen
        await this.prisma.market.update({ where: { marketId }, data: { status: "FROZEN" } }).catch(() => { });
        return this.getState(marketId);
    }
    async commit(marketId, user) {
        const freeze = await this.prisma.marketFreeze.findUnique({ where: { marketId } });
        if (!freeze)
            return { ok: false, error: "not frozen" };
        if (freeze.phase !== "signup")
            return { ok: false, error: "signup phase ended" };
        if (freeze.status !== "frozen")
            return { ok: false, error: "not accepting commitments" };
        await this.prisma.contribution.upsert({
            where: { freezeId_user: { freezeId: freeze.id, user } },
            update: { committed: true },
            create: { freezeId: freeze.id, user, committed: true },
        });
        return this.getState(marketId);
    }
    async pay(marketId, user) {
        const freeze = await this.prisma.marketFreeze.findUnique({ where: { marketId } });
        if (!freeze)
            return { ok: false, error: "not frozen" };
        if (freeze.phase !== "payment")
            return { ok: false, error: "not in payment phase" };
        const updated = await this.prisma.contribution.updateMany({
            where: { freezeId: freeze.id, user, committed: true },
            data: { paid: true, paidAt: new Date() },
        });
        if (updated.count === 0)
            return { ok: false, error: "no commitment for this user" };
        // Auto-unlock if all committed participants paid
        const all = await this.prisma.contribution.findMany({ where: { freezeId: freeze.id, committed: true } });
        if (all.length > 0 && all.every((c) => c.paid)) {
            await this.unlock(marketId);
        }
        return this.getState(marketId);
    }
    async unlock(marketId) {
        await this.prisma.market.update({ where: { marketId }, data: { status: "ACTIVE" } }).catch(() => { });
        await this.prisma.marketFreeze.update({ where: { marketId }, data: { status: "active" } }).catch(() => { });
        this.logger.log(`Market unlocked: ${marketId}`);
        return { ok: true, message: "market unlocked" };
    }
    // Cron: advance phases + auto-unlock/expire (every 5 minutes)
    async checkPhases() {
        const freezes = await this.prisma.marketFreeze.findMany({
            where: { status: { in: ["frozen", "active"] } },
        });
        const now = new Date();
        for (const f of freezes) {
            try {
                if (f.phase === "signup" && now >= f.signupDeadline) {
                    await this.prisma.marketFreeze.update({
                        where: { id: f.id },
                        data: { phase: "payment", paymentDeadline: new Date(now.getTime() + 7 * 24 * 3600 * 1000) },
                    });
                    this.logger.log(`Freeze ${f.marketId} moved to payment phase`);
                }
                else if (f.phase === "payment" && f.paymentDeadline && now >= f.paymentDeadline) {
                    const all = await this.prisma.contribution.findMany({ where: { freezeId: f.id, committed: true } });
                    if (all.length > 0 && all.every((c) => c.paid)) {
                        await this.unlock(f.marketId);
                    }
                    else {
                        await this.prisma.marketFreeze.update({ where: { id: f.id }, data: { status: "expired" } });
                        this.logger.warn(`Freeze ${f.marketId} expired (not all paid)`);
                    }
                }
            }
            catch (e) {
                this.logger.warn(`checkPhases error for ${f.marketId}: ${e.message}`);
            }
        }
    }
};
exports.FreezeService = FreezeService;
__decorate([
    (0, schedule_1.Cron)("*/300 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FreezeService.prototype, "checkPhases", null);
exports.FreezeService = FreezeService = FreezeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], FreezeService);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminController = void 0;
const common_1 = __webpack_require__(3);
const admin_service_1 = __webpack_require__(42);
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async status() {
        return this.adminService.getStatus();
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)("status"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "status", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)("api/v1/admin"),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" ? _a : Object])
], AdminController);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AdminService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminService = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(5);
const telegram_service_1 = __webpack_require__(43);
const chains_1 = __webpack_require__(13);
const viem_1 = __webpack_require__(9);
let AdminService = AdminService_1 = class AdminService {
    prisma;
    telegram;
    logger = new common_1.Logger(AdminService_1.name);
    lastAlerts = new Map(); // key -> last alert timestamp (to avoid spamming)
    constructor(prisma, telegram) {
        this.prisma = prisma;
        this.telegram = telegram;
    }
    shouldAlert(key, cooldownMs = 3600_000) {
        const last = this.lastAlerts.get(key) || 0;
        const now = Date.now();
        if (now - last < cooldownMs)
            return false;
        this.lastAlerts.set(key, now);
        return true;
    }
    // Cron every 5 minutes
    async monitor() {
        const events = [];
        try {
            events.push(...(await this.checkFreezes()));
        }
        catch (e) {
            events.push(`Freeze check error: ${e.message}`);
        }
        try {
            events.push(...(await this.checkOracle()));
        }
        catch (e) {
            events.push(`Oracle check error: ${e.message}`);
        }
        try {
            events.push(...(await this.checkMM()));
        }
        catch (e) {
            events.push(`MM check error: ${e.message}`);
        }
        if (events.length > 0) {
            this.logger.warn(`Admin monitor events: ${events.length}`);
            for (const e of events)
                this.logger.warn("  " + e);
            if (events.length > 0) {
                const text = "⚠️ MirrorBook events:\n\n" + events.map((e) => "• " + e).join("\n");
                this.telegram.sendMessage(text).catch(() => { });
            }
        }
    }
    // 1. Freezes: new/expired/unlocked events
    async checkFreezes() {
        const events = [];
        const freezes = await this.prisma.marketFreeze.findMany({
            where: { status: { in: ["frozen", "active"] } },
        });
        const now = Date.now();
        for (const f of freezes) {
            if (f.status === "frozen" && f.phase === "signup" && new Date(f.signupDeadline).getTime() < now) {
                // should have been moved to payment by FreezeService cron; if still signup, flag
                events.push(`Freeze ${f.marketId}: signup deadline passed (should be in payment)`);
            }
            if (f.status === "frozen" && f.phase === "payment" && f.paymentDeadline && new Date(f.paymentDeadline).getTime() < now) {
                const all = await this.prisma.contribution.findMany({ where: { freezeId: f.id, committed: true } });
                const paid = all.filter((c) => c.paid).length;
                events.push(`Freeze ${f.marketId}: payment deadline passed, ${paid}/${all.length} paid (should be resolved)`);
            }
            if (f.status === "active") {
                events.push(`Freeze ${f.marketId}: unlocked (trading resumed)`);
                // one-time notify
                if (this.shouldAlert("unlock-" + f.marketId)) {
                    this.logger.log(`NOTIFY OWNER: market ${f.marketId} unlocked`);
                }
            }
        }
        // New freezes (created in the last 5 min)
        const recentFreezes = await this.prisma.marketFreeze.findMany({
            where: { status: "frozen", createdAt: { gte: new Date(Date.now() - 5 * 60 * 1000) } },
        });
        for (const f of recentFreezes) {
            if (this.shouldAlert("newfreeze-" + f.marketId, 0)) {
                events.push(`NEW FREEZE: ${f.marketId} needs $${f.amountUsd} (reason: ${f.reason})`);
            }
        }
        return events;
    }
    // 2. Oracle health: last push age on Base
    async checkOracle() {
        const events = [];
        const oracle = process.env.ORACLE_CONTRACT_ADDRESS;
        if (!oracle)
            return events;
        const client = (0, chains_1.getClient)(8453);
        if (!client)
            return events;
        try {
            const abi = (0, viem_1.parseAbi)(["function pairsCount() view returns (uint256)"]);
            const count = await client.readContract({ address: oracle, abi, functionName: "pairsCount" });
            // If oracle enabled but no pairs pushed recently, flag is checked via latestPrice per pair; keep simple:
            events.push(`Oracle: ${count} pairs registered on Base`);
        }
        catch (e) {
            events.push(`Oracle unreachable: ${e.shortMessage || e.message}`);
        }
        return events;
    }
    // 3. MM health: position exists + gas balance
    async checkMM() {
        const events = [];
        const mmKey = process.env.MM_PRIVATE_KEY;
        if (!mmKey || process.env.MM_ENABLED !== "true")
            return events;
        const client = (0, chains_1.getClient)(8453);
        if (!client)
            return events;
        try {
            const { privateKeyToAccount } = await Promise.resolve().then(() => __importStar(__webpack_require__(30)));
            const acc = privateKeyToAccount(mmKey.startsWith("0x") ? mmKey : `0x${mmKey}`);
            const nfpm = chains_1.ADDRESSES[8453]?.uniV3PositionManager;
            if (nfpm) {
                const abi = (0, viem_1.parseAbi)(["function balanceOf(address) view returns (uint256)"]);
                const positions = await client.readContract({ address: nfpm, abi, functionName: "balanceOf", args: [acc.address] });
                if (positions === 0n) {
                    events.push(`MM WARNING: no liquidity position (balanceOf=0)`);
                }
            }
            const eth = await client.getBalance({ address: acc.address });
            if (eth < 1000000000000000n) { // < 0.001 ETH
                events.push(`MM WARNING: low gas balance ${(Number(eth) / 1e18).toFixed(5)} ETH`);
            }
        }
        catch (e) {
            events.push(`MM check error: ${e.shortMessage || e.message}`);
        }
        return events;
    }
    // Status endpoint data (for owner query)
    async getStatus() {
        const freezes = await this.prisma.marketFreeze.findMany({ where: { status: { in: ["frozen", "active"] } } });
        const events = [];
        events.push(...(await this.checkOracle()));
        events.push(...(await this.checkMM()));
        return {
            activeFreezes: freezes.length,
            freezes: freezes.map((f) => ({ marketId: f.marketId, phase: f.phase, status: f.status, amountUsd: f.amountUsd })),
            events,
            now: new Date().toISOString(),
        };
    }
};
exports.AdminService = AdminService;
__decorate([
    (0, schedule_1.Cron)("*/300 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminService.prototype, "monitor", null);
exports.AdminService = AdminService = AdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof telegram_service_1.TelegramService !== "undefined" && telegram_service_1.TelegramService) === "function" ? _b : Object])
], AdminService);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TelegramService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelegramService = void 0;
const common_1 = __webpack_require__(3);
const schedule_1 = __webpack_require__(4);
let TelegramService = TelegramService_1 = class TelegramService {
    logger = new common_1.Logger(TelegramService_1.name);
    token = process.env.TELEGRAM_BOT_TOKEN || "";
    chatId = process.env.TELEGRAM_CHAT_ID || null;
    lastUpdateId = 0;
    lastReport = "";
    async api(method, body) {
        if (!this.token)
            return null;
        try {
            const r = await fetch(`https://api.telegram.org/bot${this.token}/${method}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            return await r.json();
        }
        catch (e) {
            this.logger.warn(`Telegram ${method} error: ${e.message}`);
            return null;
        }
    }
    async resolveChatId() {
        if (this.chatId)
            return this.chatId;
        if (!this.token)
            return null;
        try {
            const r = await fetch(`https://api.telegram.org/bot${this.token}/getUpdates?offset=${this.lastUpdateId + 1}`, {});
            const data = await r.json();
            const updates = data?.result || [];
            if (updates.length > 0) {
                this.lastUpdateId = updates[updates.length - 1].update_id;
                for (const u of updates) {
                    const msg = u.message || u.edited_message || u.channel_post;
                    if (msg?.chat?.id) {
                        this.chatId = String(msg.chat.id);
                        this.logger.log(`Telegram chat_id discovered: ${this.chatId}`);
                        break;
                    }
                }
            }
        }
        catch (e) {
            this.logger.warn(`Telegram getUpdates error: ${e.message}`);
        }
        return this.chatId;
    }
    async sendMessage(text) {
        if (!this.token)
            return false;
        const chatId = await this.resolveChatId();
        if (!chatId)
            return false;
        const res = await this.api("sendMessage", { chat_id: chatId, text: text.slice(0, 4000) });
        return !!res?.ok;
    }
    // Process incoming owner commands (query -> report) — polled every 30s
    async pollCommands() {
        if (!this.token || !this.chatId) {
            await this.resolveChatId();
            return;
        }
        try {
            const r = await fetch(`https://api.telegram.org/bot${this.token}/getUpdates?offset=${this.lastUpdateId + 1}`, {});
            const data = await r.json();
            const updates = data?.result || [];
            for (const u of updates) {
                this.lastUpdateId = u.update_id;
                const msg = u.message;
                if (!msg?.text)
                    continue;
                const text = msg.text.trim().toLowerCase();
                if (text === "/status" || text === "статус" || text === "отчёт" || text === "отчет" || text === "report") {
                    const report = await this.generateReport();
                    this.lastReport = report;
                    await this.sendMessage(report);
                }
                else if (text === "/start" || text === "привет" || text === "hello") {
                    await this.sendMessage("Привет! Я AI-админ MirrorBook.\n\nКоманды:\n/status — сводка по бирже\n\nАварийные события присылаю автоматически.");
                }
            }
        }
        catch (e) {
            this.logger.warn(`Telegram poll error: ${e.message}`);
        }
    }
    // Generate a simple report (will be replaced by Qwen LLM when integrated)
    async generateReport() {
        const report = this.lastReport || "";
        return `📊 MirrorBook status\n\n` +
            `(Отчёт генерируется — Qwen подключим позже. Сейчас базовый мониторинг.)\n\n` +
            `Команды:\n/status — обновить сводку`;
    }
};
exports.TelegramService = TelegramService;
__decorate([
    (0, schedule_1.Cron)("*/30 * * * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TelegramService.prototype, "pollCommands", null);
exports.TelegramService = TelegramService = TelegramService_1 = __decorate([
    (0, common_1.Injectable)()
], TelegramService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
// @ts-nocheck
globalThis.self = globalThis;
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: true });
    const port = process.env.PORT || 3001;
    await app.listen(port, "127.0.0.1");
    console.log(`MirrorBook backend running on http://localhost:${port}`);
}
bootstrap();

})();

/******/ })()
;