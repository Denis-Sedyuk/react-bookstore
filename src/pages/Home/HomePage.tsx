import React from "react";
import { BookList } from "../../components/BookList/BookList";
import { SubscribeForm } from "../../components/SubscribeForm/SubscribeForm";
import { Title } from "../../components/Title/Title";

export const HomePage = () => {
  return (
    <div>
      <Title>New Releases Books</Title>
      <BookList />
      <SubscribeForm />
    </div>
  );
};
