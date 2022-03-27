import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

export default function Leaderboard() {

  const columns = [
    { name: "RANK", uid: "rank" },
    { name: "NAME", uid: "name" },
    { name: "INSTITUTE", uid: "school" },
    { name: "RATING", uid: "rating" },
  ];
  const users = [
    {
      "id": 1,
      "name": "Notes N",
      "username": "aasasas",
      "school": "Al Akhawayn University",
      "rating": 5,
      "rank": 1
    },
    {
      "id": 2,
      "name": "Vishvam Porwal",
      "username": "vishvamporwal",
      "school": "Acropolis Institute of Technology & Research, Indore",
      "rating": 4,
      "rank": 2
    },
    {
      "id": 3,
      "name": "Yash Hingwe",
      "username": "yash_hingwe",
      "school": "Acropolis Institute of Technology & Research, Indore",
      "rating": 4,
      "rank": 3
    },
    {
      "id": 4,
      "name": "Naren Loganathan",
      "username": "naren_l",
      "school": "Indian Institute of Technology Palakkad",
      "rating": 4,
      "rank": 4
    },
    {
      "id": 5,
      "name": "Bohdan Pryshchenko",
      "username": "LeBron",
      "school": "Other",
      "rating": 3,
      "rank": 5
    },
    {
      "id": 6,
      "name": "Wanjun Li",
      "username": "wjli",
      "school": "Microsoft",
      "rating": 3,
      "rank": 6
    },
    {
      "id": 7,
      "name": "Chetan Patil",
      "username": "patilc125",
      "school": "Other",
      "rating": 3,
      "rank": 7
    },
    {
      "id": 8,
      "name": "Heart Blue",
      "username": "heart_blue",
      "school": "Other",
      "rating": 3,
      "rank": 8
    },
    {
      "id": 9,
      "name": "Mohib Manva",
      "username": "mohib_manva",
      "school": "Dhirubhai Ambani Institute of Information and Communication Technology",
      "rating": 3,
      "rank": 9
    },
    {
      "id": 10,
      "name": "Satyendra Bilthare",
      "username": "biltharesatyendra",
      "school": "Maulana Azad National Institute of Technology, Bhopal",
      "rating": 2,
      "rank": 10
    },
    {
      "id": 11,
      "name": "Sabit Zahin",
      "username": "sgtlaugh",
      "school": "University of Dhaka",
      "rating": 2,
      "rank": 11
    },
    {
      "id": 12,
      "name": "Trung Nguyen",
      "username": "chemthan",
      "school": "FPT University",
      "rating": 2,
      "rank": 12
    },
    {
      "id": 13,
      "name": "Mohamed Anany",
      "username": "triplem5ds",
      "school": "Ain-shams university",
      "rating": 2,
      "rank": 13
    },
    {
      "id": 14,
      "name": "Practice Hard",
      "username": "practice_hard",
      "school": "Other",
      "rating": 2,
      "rank": 14
    },
    {
      "id": 15,
      "name": "Miloslav Brožek",
      "username": "Morass666",
      "school": "CTU in Prague",
      "rating": 2,
      "rank": 15
    },
    {
      "id": 16,
      "name": "laugh out loud",
      "username": "LOL",
      "school": "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
      "rating": 2,
      "rank": 16
    },
    {
      "id": 17,
      "name": "Aaradhya Dixit",
      "username": "Aaradhya",
      "school": "Birla Institute Of Technology, Mesra",
      "rating": 2,
      "rank": 17
    },
    {
      "id": 18,
      "name": "Manish Mulchandani",
      "username": "Manish2002",
      "school": "Institute of Engineering and Technology, Devi Ahilya Vishwavidyalaya",
      "rating": 2,
      "rank": 18
    },
    {
      "id": 19,
      "name": "Amit Kumar",
      "username": "aktgb_31",
      "school": "National Institute of Technology, Calicut",
      "rating": 2,
      "rank": 19
    },
    {
      "id": 20,
      "name": "Inamul Haque Shibly",
      "username": "inam",
      "school": "Jahangirnagar University",
      "rating": 2,
      "rank": 20
    },
    {
      "id": 21,
      "name": "Marcos Kolodny",
      "username": "marcosk",
      "school": "Other",
      "rating": 2,
      "rank": 21
    },
    {
      "id": 22,
      "name": "Shivam Saluja",
      "username": "shivamsaluja20",
      "school": "LNM Institute of Information Technology",
      "rating": 2,
      "rank": 22
    },
    {
      "id": 23,
      "name": "Mohsen Mahroos",
      "username": "CodingKnight",
      "school": "Cairo University",
      "rating": 2,
      "rank": 23
    },
    {
      "id": 24,
      "name": "ashish gupta",
      "username": "ashgup",
      "school": "Birla Institute of Technology & Science Pilani, Hyderabad Campus",
      "rating": 2,
      "rank": 24
    },
    {
      "id": 25,
      "name": "Yongwhan Lim",
      "username": "yongwhan",
      "school": "Stanford University",
      "rating": 2,
      "rank": 25
    },
    {
      "id": 26,
      "name": "Fahim Shahriar Shakkhor",
      "username": "fsshakkhor",
      "school": "Islamic University of Technology (IUT)",
      "rating": 2,
      "rank": 26
    },
    {
      "id": 27,
      "name": "Bohdan Pastuschak",
      "username": "BohdanPastuschak",
      "school": "Lviv Ivan Franko University",
      "rating": 2,
      "rank": 27
    },
    {
      "id": 28,
      "name": "AmirReza PoorAkhavan",
      "username": "Arpa",
      "school": "AE high school",
      "rating": 2,
      "rank": 28
    },
    {
      "id": 29,
      "name": "Sarthak Manna",
      "username": "sarthakmanna",
      "school": "Kalyani Government Engineering College",
      "rating": 2,
      "rank": 29
    },
    {
      "id": 30,
      "name": "Prodip Datta",
      "username": "prodipdatta7",
      "school": "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
      "rating": 2,
      "rank": 30
    }

  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents3" }}>
                {user.username}
              </Text>
            </Row>
          </Col>
        );
      case "school":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}