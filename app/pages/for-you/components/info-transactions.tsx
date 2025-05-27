import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: 1,
    title: "Cashflow - Spending",
    description: "Food & Baverage",
    isTransaction: true,
    type: "OUTCOME",
    from: "ESPAY DEBIT INDONE",
    amount: 25000,
    date: new Date(),
  },
  {
    id: 2,
    title: "Cashflow - Spending",
    description: "Utilities",
    isTransaction: true,
    type: "OUTCOME",
    from: "ESPAY DEBIT INDONE",
    amount: 77000,
    date: new Date(),
  },
  {
    id: 3,
    title: "Easy Ways to Buy AXIS Mobile Data in myBCA",
    description: "Purchase Buy Mobile Data AXIS in myBCA",
    isTransaction: false,
    type: "",
    from: "",
    amount: 0,
    date: new Date(),
  },
  {
    id: 4,
    title: "Cashflow - Earning",
    description: "Account Transfer",
    isTransaction: true,
    type: "INCOME",
    from: "ESPAY DEBIT INDONE",
    amount: 77000,
    date: new Date(),
  },
];

const InfoTransactions = () => {
  const [selectedCard, setSelectedCard] = useState("all");

  function isAllSelected() {
    return selectedCard === "all";
  }

  function isInfoSelected() {
    return selectedCard === "info";
  }
  function isTransactionSelected() {
    return selectedCard === "transaction";
  }

  function getListData() {
    if (isAllSelected()) {
      return data;
    } else if (isInfoSelected()) {
      return data.filter((item) => !item.isTransaction);
    }

    return data.filter((item) => item.isTransaction);
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          margin: 10,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: isAllSelected() ? "#165b98" : "#68696b",
            backgroundColor: isAllSelected() ? "#e5f3fe" : "##fff",
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedCard("all");
          }}
        >
          <Text style={{ color: "#484848" }}>All Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: isInfoSelected() ? "#165b98" : "#68696b",
            backgroundColor: isInfoSelected() ? "#e5f3fe" : "##fff",
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedCard("info");
          }}
        >
          <Text style={{ color: "#484848" }}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: isTransactionSelected() ? "#165b98" : "#68696b",
            backgroundColor: isTransactionSelected() ? "#e5f3fe" : "##fff",
            borderRadius: 10,
          }}
          onPress={() => {
            setSelectedCard("transaction");
          }}
        >
          <Text style={{ color: "#484848" }}>Transactions</Text>
        </TouchableOpacity>
      </View>
      {getListData().map((data) =>
        data.isTransaction ? (
          <InfoCard data={data} key={data.id} />
        ) : (
          <TransactionCard data={data} key={data.id} />
        )
      )}
    </View>
  );
};

const TransactionCard = (props: { data: any }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            backgroundColor: "#e8edf1",
            padding: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo
            name="megaphone"
            size={26}
            color="#5d879c"
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text
              style={{ color: "#185281", fontWeight: "bold", width: "60%" }}
            >
              {props.data.title}
            </Text>
            <Text style={{ color: "#878e94" }}>
              {props.data.date
                .toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(",", "")}
            </Text>
          </View>

          <Text style={{ fontSize: 12 }}>{props.data.description}</Text>
        </View>
      </View>

      <View
        style={{
          borderColor: "#dedede",
          borderWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
    </TouchableOpacity>
  );
};

const InfoCard = (props: { data: any }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            backgroundColor: "#dbf7f8",
            padding: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="document-text"
            size={26}
            color="#2abbb8"
            style={{ width: 25, height: 25 }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#185281", fontWeight: "bold" }}>
              {props.data.title}
            </Text>
            <Text style={{ color: "#878e94" }}>
              {props.data.date
                .toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(",", "")}
            </Text>
          </View>

          {props.data.type === "OUTCOME" ? (
            <Text style={{ fontSize: 12 }}>
              You spent{" "}
              <Text style={{ color: "#b82e39" }}>
                IDR{" "}
                {props.data.amount.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>{" "}
              at {props.data.description}
            </Text>
          ) : (
            <Text style={{ fontSize: 12 }}>
              You received{" "}
              <Text style={{ color: "#165b98" }}>
                IDR{" "}
                {props.data.amount.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>{" "}
              from {props.data.from} at {props.data.description} category
            </Text>
          )}
        </View>
      </View>

      <View
        style={{
          borderColor: "#dedede",
          borderWidth: 0.5,
          marginTop: 15,
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default InfoTransactions;
