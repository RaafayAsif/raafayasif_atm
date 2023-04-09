#! /usr/bin/env node

import inquirer from "inquirer";

interface atmType {
  id: string;
  pass: string;
  accounttype: string;
  transc: number;
}

const atm: atmType = await inquirer.prompt([
  {
    type: "input",
    name: "id",
    message: "ENTER YOUR ID",
  },
  {
    type: "input",
    name: "pass",
    message: "ENTER YOUR PASSWORD",
  },
  {
    type: "list",
    name: "accounttype",
    choices: ["CURRENT", "SAVINGS"],
    message: "SELECT YOUR ACCOUNT:",
  },
  {
    type: "list",
    name: "transc",
    choices: [1000, 2000, 5000, 10000],
    message: "SELECT YOUR AMOUNT:",
    when(answers) {
      return answers.accounttype === "CURRENT";
    },
  },
  {
    type: "input",
    name: "transc",
    message: "ENTER YOUR AMOUNT:",
    when(answers) {
      return answers.accounttype === "SAVINGS";
    },
  },
]);

if (atm.id && atm.pass) {
  const balance = Math.floor(Math.random() * 100000000);
  if (balance <= atm.transc) {
    balance - atm.transc;
    console.log("YOUR TRANCS AMOUNT:", atm.transc);

    console.log("YOUR AVAILABLE BALANCE:", balance);
  }

  console.log(balance);
} else {
  console.log("ENTER CORRECT INFO PLEASE");
}
