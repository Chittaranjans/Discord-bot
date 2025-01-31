import Parser from 'rss-parser';
import { TextChannel } from 'discord.js';

const parser = new Parser();

export async function checkBlogUpdates(channel: TextChannel) {
  const feed = await parser.parseURL('https://your-blog-website.com/rss');
  const latestPost = feed.items[0];
  channel.send(`New blog post: ${latestPost.title}\n${latestPost.link}`);
}
