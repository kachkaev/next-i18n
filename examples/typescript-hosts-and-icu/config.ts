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
    SOME_SECRET_THAT_CANNOT_BE_SHARED: envalid.host({
      default: "if this leaks to the client, the security is compromised",
    }),
  },
  { strict: true },
);
