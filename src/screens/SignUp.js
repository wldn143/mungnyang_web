import React, { useState, useEffect } from "react";
import StartLayout from "../components/auth/StartLayout";
import Input from "../components/auth/Input";
import SubmitButton from "../components/auth/SubmitButton";
import AuthLayout from "../components/auth/AuthLayout";
import Header from "../components/feed/Header";
import AuthBox from "../components/auth/AuthBox";
import BackButton from "../components/feed/BackButton";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(name);
    console.log(email);
    console.log(password);

    let body = {
      name: name,
      email: email,
      password: password,
    };

    axios.post("http://localhost:8080/sign-up", body).then((res) => {
      console.log(res);
      history.replace("/sign-up2");
    });
  };
  return (
    <StartLayout>
      <AuthLayout>
        <Header>
          <BackButton></BackButton>
          <div>사용자 정보 입력</div>
          <div> </div>
        </Header>
        <div
          className="WhiteSpace"
          style={{
            width: "100%",
            height: "50px",
          }}
        ></div>
        <AuthBox>
          <form onSubmit={submitHandler}>
            <Input
              name="name"
              type="text"
              placeholder="이름"
              value={name}
              onChange={nameHandler}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="이메일"
              value={email}
              onChange={emailHandler}
              required
            />
            <Input type="text" placeholder="전화번호" />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={passwordHandler}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              //value={confirmPassword}
              required
            />
            <div
              id="WhiteSpace"
              style={{
                backgroundColor: "white",
                width: "100%",
                height: "30px",
              }}
            ></div>
            <SubmitButton type="submit">다음</SubmitButton>
          </form>
        </AuthBox>
      </AuthLayout>
    </StartLayout>
  );

  // const onSubmit = (values) => {
  //   axios
  //     .post("http://localhost:8080/sign-up", {
  //       name: values.name,
  //       email: values.email,
  //       password: values.password,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       history.replace("/sign-up2");
  //     });
  // };

  // const [confirmPassword, setConfirmPassword] = useState("");

  // const onNameHandler = (event) => {
  //   setName(event.currentTarget.value);
  // };
  // const onEmailHandler = (event) => {
  //   setEmail(event.currentTarget.value);
  // };

  // const onPasswordHandler = (event) => {
  //   setPassword(event.currentTarget.value);
  // };

  // function onSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     name,
  //     email,
  //     password,
  //   };
  //   axios.post("http://localhost:8080/sign-up", data).then((response) => {});
  // }
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if (password !== confirmPassword) {
  //     return alert("입력한 비밀번호와 일치하지 않습니다.");
  //   }
  // }

  // return (
  //   <StartLayout>
  //     <AuthLayout>
  //       <Header>
  //         <BackButton></BackButton>
  //         <div>사용자 정보 입력</div>
  //         <div> </div>
  //       </Header>
  //       <div
  //         className="WhiteSpace"
  //         style={{
  //           width: "100%",
  //           height: "100px",
  //         }}
  //       ></div>
  //       <AuthBox>
  //         <Form name="상품 업로드" onFinish={onSubmit}>
  //           <Form.Item
  //             label={<div className="upload-label">이름</div>}
  //             name="name"
  //             rules={[{ required: true, message: "이름을 입력해주세요" }]}
  //           >
  //             <Input
  //               className="upload-name"
  //               size="medium"
  //               placeholder="이름을 입력해주세요."
  //             />
  //           </Form.Item>
  //           <Divider />
  //           <Form.Item
  //             name="email"
  //             label={<div className="upload-label">이메일</div>}
  //             rules={[{ required: true, message: "이메일을 입력해주세요" }]}
  //           >
  //             <Input
  //               className="upload-email"
  //               size="medium"
  //               placeholder="이메일을 입력해주세요"
  //             />
  //           </Form.Item>
  //           <Divider />
  //           <Form.Item
  //             name="phonenumber"
  //             label={<div className="upload-label">전화번호 </div>}
  //           >
  //             <Input
  //               className="upload-name"
  //               size="medium"
  //               placeholder="전화번호"
  //             />
  //           </Form.Item>
  //           <Divider />
  //           <Form.Item
  //             name="password"
  //             label={<div className="upload-label">비밀번호</div>}
  //             rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
  //           >
  //             <Input
  //               className="upload-name"
  //               size="medium"
  //               placeholder="비밀번호"
  //             />
  //           </Form.Item>
  //           <div
  //             id="WhiteSpace"
  //             style={{
  //               backgroundColor: "white",
  //               width: "100%",
  //               height: "30px",
  //             }}
  //           ></div>
  //           <Form.Item>
  //             <SubmitButton id="submit-button" size="large" htmlType="submit">
  //               다음
  //             </SubmitButton>
  //           </Form.Item>
  //         </Form>
  //       </AuthBox>
  //     </AuthLayout>
  //   </StartLayout>
  // );

  //************************************************************

  // return (
  //   <StartLayout>
  //     <AuthLayout>
  //       <Header>
  //         <BackButton></BackButton>
  //         <div>사용자 정보 입력</div>
  //         <div> </div>
  //       </Header>
  //       <div
  //         className="WhiteSpace"
  //         style={{
  //           width: "100%",
  //           height: "50px",
  //         }}
  //       ></div>
  //       <AuthBox>
  //         <form action="/sign-up2" method="get">
  //           <Input
  //             name="name"
  //             type="text"
  //             placeholder="이름"
  //             value={name}
  //             onChange={onNameHandler}
  //             required
  //           />
  //           <Input
  //             name="email"
  //             type="email"
  //             placeholder="이메일"
  //             value={email}
  //             onChange={onEmailHandler}
  //             required
  //           />
  //           <Input type="text" placeholder="전화번호" />
  //           <Input
  //             name="password"
  //             type="password"
  //             placeholder="비밀번호"
  //             value={password}
  //             onChange={onPasswordHandler}
  //             required
  //           />
  //           <Input
  //             type="password"
  //             name="confirmPassword"
  //             placeholder="비밀번호 확인"
  //             //value={confirmPassword}
  //             required
  //           />
  //           <div
  //             id="WhiteSpace"
  //             style={{
  //               backgroundColor: "white",
  //               width: "100%",
  //               height: "30px",
  //             }}
  //           ></div>
  //           <SubmitButton type="submit" onSubmit={onSubmit}>
  //             다음
  //           </SubmitButton>
  //         </form>
  //       </AuthBox>
  //     </AuthLayout>
  //   </StartLayout>
  // );
}
export default SignUp;
