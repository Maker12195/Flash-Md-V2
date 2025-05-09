import dotenv from "dotenv";
dotenv.config();
const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
  AUTO_LIKE: process.env.AUTO_LIKE || "on",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "off",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "off",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "FLASH-MD",
  ANTICALL: process.env.ANTICALL || "off",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  timezone: process.env.TIME_ZONE || "Africa/Nairobi",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "public",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX ? process.env.PREFIX.split(",").map(p => p.trim()).filter(p => p) : [],
  Session: process.env.SESSION || "FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdpakdubmZ3OTR1dWsvVW1uUld4UUpKVyswVGh2VlAvNEVkTDV6ajEyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTVSSE5RdWlveHpwUDJ3T0dmcUphTzZ3QmFESVN0ekEyamNDYU5XaXMzZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRWV2TmtGZ2M3ZjJIYk5DNHh6eitVaENZTklwa3VZWFhLd2ZCN0pVWFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvdHVMR1JGc0g0UTVVSnFPUHk2M1lYM0lsNmpqaVVHZDczWFV2czJIR1ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNObjhCWlBxR3gwQ1dyYkN0V1Q4VzdFajVnaDNqQWFFSEJaTyt0U3o5R0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik92b2ZHd2JaMkU5QVpVdFVpaGJ3MmZraXovN2NzTERQd1JrSFd1ZkFNdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtuaEo4VExkdk1ySnhldDRSYi9PMDIyQVl3R25BL24xYVZIQzh1ZnNHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVNQQWg4MG4vN3lWK2UrQTZ4dkFVaFJRWi8wOElCQkRPdlNhS0ZQUkVSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVTkNzREx4TUpLMzAyYkFaenlxOXh0d2NkWFlXdXN1a2I5S1JRQlIxZzNLRFBHb1BoZmlJOWlQNmNOMVAxWEdZRVo4a0V4LzBmRG5KdVZOa25sV2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJqdHg5RDFoSG1qZUdFMk9FR3VpTmJabzBiK3ZvMWdleCt3c0o1V09XQ1JFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwMTUxMDk2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRDI5NEI5NUExQjQ3QzJENzFBQ0QyQ0U2Mzc1QzU2MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1ODQ0NTI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDE1MTA5NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDNCNTI1QjExMTk3OTE5MEE5MjZDQTNFRTYxMEZFQ0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTg0NDUyNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzAxNTEwOTYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhDOUMzM0NEQjhFRUY4ODk3OEQwRjQzNjM3MkM5NjBBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDU4NDQ1NDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwMTUxMDk2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QTNEM0JCNkMyMTE0RkNEOEMwMDJDQzY0RkZGN0RBRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1ODQ0NTU4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDE1MTA5NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUFDNkQxNkJCRTVCNjBDMDE2MjlBQ0IxNjMwRTg5MEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTg0NDU3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSk1ETVA4M1oiLCJtZSI6eyJpZCI6IjI1NDcwMTUxMDk2MDoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im1ha2VyIiwibGlkIjoiMTU5MzY1MzE1MTk1MDkzOjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKT2JzNlVCRUpueXZjQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQSVZjWGFKMFdBM0hQcjJzcE9EcU9lTWNEK1NHTERHaG5NSi9aVkZFK3hrPSIsImFjY291bnRTaWduYXR1cmUiOiJPeVFsQnJ4SC8zNmJYRkVDSkg2bmRYVDNwZnhVSjhRWGxydS84T1BUUEQ1djBsV3BybWQxUjJsUldHWm1KakZZM3Qvd3kzbkc3c3g2NnQ1aG1HNkNEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidUZXUVU4U0VmMk1IajJpMDRLNHhFR28vdExub1RZSUlmTjJlN05VZEtsY1k2VFRhMXE0blBhdE5wTVdHb0lzdDBOL2RLV2ZCbFRQOVN1NkRrR3I1aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDE1MTA5NjA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUeUZYRjJpZEZnTnh6NjlyS1RnNmpuakhBL2toaXd4b1p6Q2YyVlJSUHNaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU4NDQ1MTgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTU5PIn0=",
  NUMBER: process.env.OWNER_NUMBER || "254701510960",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};
export default conf;
