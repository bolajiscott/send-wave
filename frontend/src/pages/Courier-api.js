import { CourierClient } from "@trycourier/courier";
      
const courier = CourierClient({ authorizationToken: "pk_prod_TPJNM2RK7RM6CMMNKSHJ8YCVS2D2"});


async function sendNotification({userEmail}){
    console.log(userEmail)

    const { requestId } = await courier.send({
    message: {
        content: {
        title: "Welcome to sendwave!",
        body: "Hello! {{content}}"
        },
        data: {
        content: " sendwave made it easy to send money with your social account!"
        },
        to: {
        email: userEmail
        }
    }
    });
    console.log(requestId)
}

export default sendNotification