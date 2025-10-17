const https = require("https");
const fs = require("fs");


const API_KEY = "Your api key";


const MODEL = "gemini-2.0-flash";


//my code1=AIzaSyCxsgyZKQet
// EraddOKdyoQBt9L2qXUvBTE
const prompt = process.argv.slice(2).join(" ");
if (!prompt) {
  console.log('Usage: node index.js "Describe your backend project requirements here"');
  process.exit(1);
}

// my code2=AIzaSyDvGcmMsI1T
// k4AiRRd5ruuWzcIDjNFYoyE
const enhancedPrompt = `
this is a backend question.
Based on the following project requirements, provide:

1. Full backend code .
2. Recommended folder structure
3. Commands to run the backend project

Requirements:
${prompt}

Please provide plain text output only. Do not include any emojis or color formatting.
`;

//my code3=AIzaSyC_hcPsEGc6yYe1
// TlBtTxKEQQ5p-VWRNHs
const data = JSON.stringify({
  contents: [{ parts: [{ text: enhancedPrompt }] }]
});

//my code4=AIzaSyDs0evCkUw9
// K1J_8VMYX-tbf0IBq39IxWc
const options = {
  hostname: "generativelanguage.googleapis.com",
  path: `/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-goog-api-key": API_KEY
  }
};


//my code5=AIzaSyCnNvXhEYVof
// k-3KLDHDmkG4Wp9OyX4ENU

const req = https.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => (body += chunk));
  res.on("end", () => {
    try {
      const json = JSON.parse(body);

      if (json.error) {
        console.error("API Error:", json.error);
        return;
      }

      const output = json.candidates[0].content.parts[0].text;

      const fileName = `backend_output_${Date.now()}.txt`;
      fs.writeFileSync(fileName, output, "utf8");

      console.log(`Response saved to: ${fileName}`);
      console.log("Check the file for full code, folder structure, and run commands.");
    } catch (err) {
      console.error("Error parsing response:", err);
      console.error("Raw body:", body);
    }
  });
});
//my code6=AIzaSyCJDOX7a
// E-LwirA61QBZCF6s1QcYVrtDpo

req.on("error", (err) => console.error("Request error:", err));
req.write(data);
req.end();





// my code7=AIzaSyDPd1W6a9BE5
// P24lmaodbZ_X
// CwuCQ5XvWg




//my code8=AIzaSyCesn

// JnBqSrUes7QBI714

// cFAnoYdNyLYjM




//my code9=AIzaSyC6wp6VSA6

// kHP18Fj0iXPXobE

// gkoXPYHSE



//my code10=AIzaSyBlKlP_Pt

// 6qi9Gfb5eEhqtX

// QfGtpO4zjMM




//mycode 11=AIzaSyClxiBlC
// orJ6V8t1pxM-z38Tns
// AsOUrXH4




//my code12=AIzaSyC
// y8bQFjl9BIaufeq2q
// cmjANcNuSz_2gyo











