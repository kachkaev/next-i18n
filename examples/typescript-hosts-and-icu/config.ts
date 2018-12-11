import * as envalid from "envalid";

export const env = envalid.cleanEnv(
  process.env,
  {
    HOST_EN: envalid.host({
      default: "en.localhost",
    }),
    HOST_RU: envalid.host({
      default: "ru.localhost",
    }),
  },
  { strict: true },
);
