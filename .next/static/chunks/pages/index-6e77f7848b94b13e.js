(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3678)}])},3678:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j}});var d=c(5893),e=c(9008),f=c.n(e),g=c(214),h=c.n(g);c(7294);var i=c(5787);function j(){var a=function(a){var b=a.target.value;a.target.checked?(c.add(b),console.log("Added Scope - "+b),console.log("Current Scopes"),console.log(c)):(c.delete(b),console.log("Removed Scope- "+b),console.log("Current Scopes"),console.log(c))},b=function(){if(0===c.size){alert("No scopes have been selected. Please try again!");return}var a="",b=0;c.forEach(function(d){++b==c.size?a+=d:a+=d+" ",console.log(a)});var d=encodeURIComponent(a);window.open("https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=".concat("2didsk5u5vofme0jg633hlrncou75l","&redirect_uri=http://localhost:3000/auth&scope=").concat(d,"&state=c3ab8aa609ea11e793ae92361f002671")),window.location.reload()},c=new Set([]);return(0,d.jsxs)("div",{className:h().container,children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"JavaBits Authorizer"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)("main",{className:h().main,children:[(0,d.jsxs)("h1",{className:h().title,children:["Welcome to ",(0,d.jsx)("a",{href:"#",children:"JavaBits API"})]}),(0,d.jsx)("p",{className:h().description,children:"Get started by selecting the scopes you wish to use."}),(0,d.jsx)("h1",{children:"Twitch API Scopes"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("table",{className:"styled-table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",children:"Active"}),(0,d.jsx)("th",{scope:"col",children:"Scope"}),(0,d.jsx)("th",{scope:"col",children:"Description"})]})}),(0,d.jsx)("tbody",{children:i.map(function(b,c){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"checkbox",value:b.scope,onChange:a})}),(0,d.jsx)("td",{children:b.scope}),(0,d.jsx)("td",{children:b.description})]},b+c)})})]}),(0,d.jsx)("div",{className:"button-div",children:(0,d.jsx)("button",{type:"button",className:"button-5",onClick:b,children:"Authorize Application"})}),(0,d.jsxs)("p",{className:"p-note",children:["NOTE: An application must request only the scopes required by the APIs that their app calls.",(0,d.jsx)("br",{}),"If you request more scopes than is required to support your app’s functionality, Twitch may suspend your application’s access to the Twitch API."]})]})]})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(a,b,c){a.exports=c(5443)},5787:function(a){"use strict";a.exports=JSON.parse('[{"scope":"analytics:read:extensions","description":"View analytics data for the Twitch Extensions owned by the authenticated account.\\n\\nGet Extension Analytics"},{"scope":"analytics:read:games","description":"View analytics data for the games owned by the authenticated account.\\n\\nGet Game Analytics"},{"scope":"bits:read","description":"View Bits information for a channel.\\n\\nGet Bits Leaderboard"},{"scope":"channel:edit:commercial","description":"Run commercials on a channel.\\n\\nStart Commercial"},{"scope":"channel:manage:broadcast","description":"Manage a channel’s broadcast configuration, including updating channel configuration and managing stream markers and stream tags.\\n\\nModify Channel Information\\nCreate Stream Marker\\nReplace Stream Tags"},{"scope":"channel:manage:extensions","description":"Manage a channel’s Extension configuration, including activating Extensions.\\n\\nGet User Active Extensions\\nUpdate User Extensions"},{"scope":"channel:manage:moderators","description":"Add or remove the moderator role from users in your channel.\\n\\nAdd Channel Moderator\\nRemove Channel Moderator"},{"scope":"channel:manage:polls","description":"Manage a channel’s polls.\\n\\nCreate Poll\\nEnd Poll"},{"scope":"channel:manage:predictions","description":"Manage of channel’s Channel Points Predictions\\n\\nCreate Channel Points Prediction\\nEnd Channel Points Prediction"},{"scope":"channel:manage:raids","description":"Manage a channel raiding another channel.\\n\\nStart a raid\\nCancel a raid"},{"scope":"channel:manage:redemptions","description":"Manage Channel Points custom rewards and their redemptions on a channel.\\n\\nCreate Custom Rewards\\nDelete Custom Reward\\nUpdate Custom Reward\\nUpdate Redemption Status"},{"scope":"channel:manage:schedule","description":"Manage a channel’s stream schedule.\\n\\nUpdate Channel Stream Schedule\\nCreate Channel Stream Schedule Segment\\nUpdate Channel Stream Schedule Segment\\nDelete Channel Stream Schedule Segment"},{"scope":"channel:manage:videos","description":"Manage a channel’s videos, including deleting videos.\\n\\nDelete Videos"},{"scope":"channel:read:editors","description":"View a list of users with the editor role for a channel.\\n\\nGet Channel Editors"},{"scope":"channel:read:goals","description":"View Creator Goals for a channel.\\n\\nGet Creator Goals"},{"scope":"channel:read:hype_train","description":"View Hype Train information for a channel.\\n\\nGet Hype Train Events"},{"scope":"channel:read:polls","description":"View a channel’s polls.\\n\\nGet Polls"},{"scope":"channel:read:predictions","description":"View a channel’s Channel Points Predictions.\\n\\nGet Channel Points Predictions"},{"scope":"channel:read:redemptions","description":"View Channel Points custom rewards and their redemptions on a channel.\\n\\nGet Custom Reward\\nGet Custom Reward Redemption"},{"scope":"channel:read:stream_key","description":"View an authorized user’s stream key.\\n\\nGet Stream Key"},{"scope":"channel:read:subscriptions","description":"View a list of all subscribers to a channel and check if a user is subscribed to a channel.\\n\\nGet Broadcaster Subscriptions"},{"scope":"channel:read:vips","description":"Read the list of VIPs in your channel.\\n\\nGet VIPs"},{"scope":"channel:manage:vips","description":"Add or remove the VIP role from users in your channel.\\n\\nGet VIPs\\nAdd Channel VIP\\nRemove Channel VIP"},{"scope":"clips:edit","description":"Manage Clips for a channel.\\n\\nCreate Clip"},{"scope":"moderation:read","description":"View a channel’s moderation data including Moderators, Bans, Timeouts, and Automod settings.\\n\\nCheck AutoMod Status\\nGet Banned Users\\nGet Moderators"},{"scope":"moderator:manage:announcements","description":"Send announcements in channels where you have the moderator role.\\n\\nSend Chat Announcement"},{"scope":"moderator:manage:automod","description":"Manage messages held for review by AutoMod in channels where you are a moderator.\\n\\nManage Held AutoMod Messages"},{"scope":"moderator:read:automod_settings","description":"View a broadcaster’s AutoMod settings.\\n\\nGet AutoMod Settings"},{"scope":"moderator:manage:automod_settings","description":"Manage a broadcaster’s AutoMod settings.\\n\\nUpdate AutoMod Settings"},{"scope":"moderator:manage:banned_users","description":"Ban and unban users.\\n\\nBan users\\nUnban user"},{"scope":"moderator:read:blocked_terms","description":"View a broadcaster’s list of blocked terms.\\n\\nGet Blocked Terms"},{"scope":"moderator:manage:blocked_terms","description":"Manage a broadcaster’s list of blocked terms.\\n\\nAdd Blocked Term\\nRemove Blocked Term"},{"scope":"moderator:manage:chat_messages","description":"Delete chat messages in channels where you have the moderator role\\n\\nDelete Chat Messages"},{"scope":"moderator:read:chat_settings","description":"View a broadcaster’s chat room settings.\\n\\nGet Chat Settings"},{"scope":"moderator:manage:chat_settings","description":"Manage a broadcaster’s chat room settings.\\n\\nUpdate Chat Settings"},{"scope":"user:edit","description":"Manage a user object.\\n\\nUpdate User"},{"scope":"user:edit:follows","description":"Deprecated. Was previously used for “Create User Follows” and “Delete User Follows.” See Deprecation of Create and Delete Follows API Endpoints."},{"scope":"user:manage:blocked_users","description":"Manage the block list of a user.\\n\\nBlock User\\nUnblock User"},{"scope":"user:read:blocked_users","description":"View the block list of a user.\\n\\nGet User Block List"},{"scope":"user:read:broadcast","description":"View a user’s broadcasting configuration, including Extension configurations.\\n\\nGet Stream Markers\\nGet User Extensions\\nGet User Active Extensions"},{"scope":"user:manage:chat_color","description":"Update the color used for the user’s name in chat.Update User Chat Color"},{"scope":"user:read:email","description":"View a user’s email address.\\n\\nGet Users (optional)"},{"scope":"user:read:follows","description":"View the list of channels a user follows.\\nGet Followed Streams"},{"scope":"user:read:subscriptions","description":"View if an authorized user is subscribed to specific channels.\\n\\nCheck User Subscription"},{"scope":"user:manage:whispers","description":"Read whispers that you send and receive, and send whispers on your behalf.\\n\\nSend Whisper"},{"scope":"channel:moderate","description":"Perform moderation actions in a channel. The user requesting the scope must be a moderator in the channel."},{"scope":"chat:edit","description":"Send live stream chat messages."},{"scope":"chat:read","description":"View live stream chat messages."},{"scope":"whispers:read","description":"View your whisper messages."},{"scope":"whispers:edit","description":"Send whisper messages."}]')}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])