import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html style={{height: "100%"}}>
                <Head></Head>
                <body style={{height: "100%"}} className="wrapper">
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
