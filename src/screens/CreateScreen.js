import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.labelStyles}>Enter Title:</Text>
      <TextInput
        style={styles.textInputStyles}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.labelStyles}>Enter Content:</Text>
      <TextInput
        style={styles.textInputStyles}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyles: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyles: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
