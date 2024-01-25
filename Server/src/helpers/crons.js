const CronJob = require("cron").CronJob;
const { send_mail } = require("../services/email.service");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** Send mail using cronjob */
new CronJob(
  "4 11 * * *",
  function () {
    console.log("Mail sent");
    send_mail("dhruviklathiya2002@gmail.com","Cron mail","This is mail send from nodemailer using cronjob");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** It's running on when clock time is 7:45 of 24 hours */
new CronJob(
  "37 8 * * *",
  function () {
    console.log("It's running on when clock time is 8:37");
  },
  null,
  false,
  //   "America/Sao_Paulo"
  "Asia/Kolkata"
).start();