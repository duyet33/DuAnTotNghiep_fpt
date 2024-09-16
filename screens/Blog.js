import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TravelBlogScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel Blog</Text>
        <Ionicons name="ios-notifications-outline" size={24} color="gray" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
        />
      </View>

      <ScrollView>
        {/* Banner Image */}
        <Image
          source={{ uri: 'https://example.com/banner-image.jpg' }} // Replace with actual image URL
          style={styles.bannerImage}
        />

        {/* Blog Title */}
        <Text style={styles.blogTitle}>Hành trình khám phá vịnh hạ long</Text>

        {/* Author Info */}
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: 'https://example.com/author-avatar.jpg' }} // Replace with actual author image URL
            style={styles.authorAvatar}
          />
          <View>
            <Text style={styles.authorName}>Nguyễn văn a</Text>
            <Text style={styles.postDate}>Ngày đăng: 2023-10-01</Text>
          </View>
        </View>

        {/* Blog Content */}
        <Text style={styles.blogContent}>
          Vịnh Hạ Long là một trong những điểm đến nổi tiếng nhất của Việt Nam, được UNESCO công nhận là Di sản Thiên nhiên Thế giới...
        </Text>

        {/* Second Blog Section */}
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: 'https://example.com/author-avatar.jpg' }} // Replace with actual image URL
            style={styles.authorAvatar}
          />
          <View>
            <Text style={styles.authorName}>Nguyễn văn a</Text>
            <Text style={styles.postDate}>2023-10-01 08:00</Text>
          </View>
        </View>
        <Text style={styles.blogContent}>
          Vịnh Hạ Long là một trong những điểm đến nổi tiếng nhất của Việt Nam...
        </Text>

        {/* Second Image */}
        <Image
          source={{ uri: 'https://example.com/second-image.jpg' }} // Replace with actual image URL
          style={styles.secondImage}
        />

        {/* Interaction Bar */}
        <View style={styles.interactionBar}>
          <View style={styles.interaction}>
            <Ionicons name="ios-heart-outline" size={20} color="gray" />
            <Text style={styles.interactionText}>150</Text>
          </View>
          <View style={styles.interaction}>
            <Ionicons name="ios-chatbubble-outline" size={20} color="gray" />
            <Text style={styles.interactionText}>20</Text>
          </View>
          <View style={styles.interaction}>
            <Ionicons name="ios-share-outline" size={20} color="gray" />
            <Text style={styles.interactionText}>10</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: 14,
    color: 'gray',
  },
  blogContent: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  secondImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  interactionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'gray',
  },
});
