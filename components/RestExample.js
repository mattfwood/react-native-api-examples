import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Heading, ExampleInput } from './TextInputExample';
import { Container, Row, FlexBetweenRow } from './Layout';

const Card = styled.View`
  margin: 8px;
  background-color: #FFF;
  border-radius: 6px;
  padding: 8px;
  display: flex;
`;

class RestExample extends Component {
  state = {
    editingPostId: null,
    posts: [],
    title: '',
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/posts/')
      const data = await res.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (val) => {
    this.setState({ title: val });
  }

  createPost = async () => {
    const { title } = this.state;


    const res = await fetch('http://localhost:3000/posts/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        title,
      }),
    });

    const newPost = await res.json();

    const { posts } = this.state;

    posts.push(newPost)

    this.setState({
      title: '',
      posts
    });
  }

  deletePost = async (id) => {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    });

    const { posts } = this.state;

    // filter out post that was deleted
    const updatedPosts = posts.filter(post => post.id !== id);

    this.setState({ posts: updatedPosts });


    console.log(res);
  }

  updatePost = async (title, id) => {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        title,
      })
    });

    const updatedPost = await res.json();

    console.log(res);
    const { posts } = this.state;

    // find changed post
    const updatedPostIndex = posts.findIndex(post => post.id === id);

    // if found, update it to the response
    if (updatedPostIndex !== -1) {
      posts[updatedPostIndex] = updatedPost;
    }

    this.setState({
      posts,
      editingPostId: null
    });
  }

  render() {
    const { posts, title, editingPostId } = this.state;
    console.log(editingPostId);
    return (
      <Container>
        <Heading>REST API Example</Heading>
        <Text>{editingPostId}</Text>
        <Row>
          <ExampleInput
            onChangeText={this.handleChange}
            value={title}
            placeholder="New Post"
          />
          <Button title="Create" onPress={this.createPost} />
        </Row>
        <Text>All Posts:</Text>
        {posts.map(post => (
          <Card key={post.id} >
            <FlexBetweenRow>
              {editingPostId !== post.id && (
                <Text
                  onPress={() => this.setState({ editingPostId: post.id })}
                >
                  {post.title}
                </Text>
              )}
              {editingPostId === post.id && (
                <ExampleInput
                  autoFocus
                  selectTextOnFocus
                  returnKeyType="done"
                  blurOnSubmit
                  onSubmitEditing={({ nativeEvent }) => {
                    console.log('ON SUBMIT EDITING');

                    this.updatePost(nativeEvent.text, post.id)
                  }}
                  defaultValue={post.title}
                />
              )}
              <Ionicons
                name="md-trash"
                size={20}
                onPress={() => this.deletePost(post.id)}
              />
            </FlexBetweenRow>
          </Card>
        ))}
      </Container>
    );
  }
}

export default RestExample;