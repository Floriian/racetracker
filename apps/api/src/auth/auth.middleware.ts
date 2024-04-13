import passport from "passport";
import { strategy } from "./strategy";

export const auth = passport.authenticate(strategy, { session: false })