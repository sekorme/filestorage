import React from "react";
import AuthForm from "@/components/AuthForm";
import { getCurrentUser } from "@/lib/actions/users.actions";
import { redirect } from "next/navigation";

const SignIn = async () => {
  return <AuthForm type="sign-in" />;
};
export default SignIn;
