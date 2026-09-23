---
title: "android has 70% of the phones and 30% of the money"
date: "2026-08-31"
description: "The arithmetic behind building iOS first, even from a country where almost everyone is on android."
---

i live in India. i'd guess something like nine out of ten phones i see in a day are android, my family is android, most of my friends are android, and the last time i suggested to someone here that they build ios first they looked at me like i'd lost it.

build ios first anyway. here's the arithmetic that changed my mind on it.

![](/essays/android-vs-ios/1.jpg)

---

### the money isn't where the users are

in 2025 the app store did around $117 billion in consumer spending while google play did around $49 billion. so apple took roughly 70% of everything people spent on apps.

now look at downloads over the same period. apple sat somewhere around 38 billion but google play was north of 100 billion.

→ android moves nearly three times the volume
→ apple takes about seven out of every ten dollars

that's the whole argument, honestly. everything else in this article is just me explaining why that gap exists and what it means when you're the one shipping.

![](/essays/android-vs-ios/2.jpg)

---

### you're not fighting a wallet, you're fighting a habit

most versions of this argument turn it into a personality thing. iphone users are richer, classier, more willing to support developers. partly true, mostly beside the point.

the real reason is structural. an iphone user has a card sitting on their apple id and buying something costs them a face scan. wanting the thing and owning the thing are about a second and a half apart.

android has payment methods attached too. but that ecosystem grew up on free ad-supported apps, so the default expectation is that software is free and ads are the price. that expectation beats any income statistic you can throw at it.

![](/essays/android-vs-ios/3.jpg)

---

### the second reason is that you'll ship faster

there's a handful of screen sizes and basically two os versions that matter, and everyone updates within a few months. you build once, you test on a small matrix, you push through testflight and it's in people's hands the same day for IOS.

android is thousands of device models and manufacturer skins and users sitting three versions behind because their carrier never pushed the update. that's not a reason to never build android, it's a reason to not build it while you're still finding out whether anyone wants the thing at all.

when you're pre product market fit, every hour spent on a layout bug on a device you've never held is an hour not spent finding out if the idea works.

![](/essays/android-vs-ios/4.jpg)

---

### what this looked like in practice

mat is an iphone app, a widget maker, cutouts of your photos sitting on your home screen. i've written about the distribution side of it a couple of times now.

it stayed free through beta until about 2000 users, then paid switched on. it now does a few hundred dollars a month on subscriptions from a user base that is small by any reasonable standard, and the interesting part is that nobody had to be convinced to pay. there was no pricing page argument, no discount, no launch offer. people who wanted it just bought it, because buying it was one tap.

i keep thinking about what that same product would have needed on android to make the same money. probably ads. probably ten times the users. definitely a longer runway.

![](/essays/android-vs-ios/5.jpg)

---

### someone else ran the experiment properly

mat is small, so take it for what it is. but there's a case study from the co-founder of glam up, an ai beauty app that hit a million users and $150k mrr in six months on tiktok, entirely organic, no ads. she published the whole thing, numbers included.

two bits from it stuck with me.

the first is the device split on their referral installs. about 62% came from iphones and 36% from android. and her read internally was that ios converted three to four times better than android. this is not a benchmark from some report, this is someone looking at their own dashboard.

![](/essays/android-vs-ios/6.jpg)

the second one is better, because it's a mistake rather than a stat. they'd found cheap distribution through faceless beauty pages on instagram, five to fifteen dollars a post, and it worked in the sense that the posts got real reach. some cleared half a million views. but the audience turned out to be mostly india, pakistan and southeast asia, largely on android, and it barely converted. plenty of installs but no subscriptions.

i want to be careful about how that gets read, because the takeaway isn't that those users are worth less as people. it's that a weekly subscription priced in dollars was never going to work on them, and the team didn't figure that out until after they'd paid for the reach. they bought traffic that couldn't buy back & had specific behaviour.

she also points out that tiktok's own daily active base skews heavily ios, roughly double android. which is the part that made me sit up, because it means your platform decision and your distribution decision aren't separate. pick a channel that skews ios and you'll end up with ios users whether you planned for it or not.

---

### the teenagers already picked

piper sandler surveys something like 13,500 american teenagers twice a year, and 87% of them own an iphone.

that's not a market share stat, that's a forecast. those are the people who'll be paying for software for the next thirty years and the decision has already been made, mostly by peer pressure and blue bubbles rather than anything a product person could influence. in the us at least, the gap isn't closing, it's widening from the bottom.

worth saying again that this is a us number. it tells you nothing about what teenagers in india or europe are carrying.

![](/essays/android-vs-ios/7.jpg)

---

### when this advice is wrong

i don't want to hand you a rule and pretend it always holds, so here's where i'd do the opposite.

→ if your product is worth more the more people are on it, go where the people are

→ if you're building for india, indonesia, brazil or most of africa specifically, ios first is a genuinely bad call and the market share numbers aren't close

→ if you make money from ads rather than subscriptions, volume is the business and android wins on volume

→ if the thing needs to touch hardware or the file system in ways apple won't allow, that decision's already been made for you

everything else, and that's most consumer software, i'd start on ios and port later once you know you have something.

---

### the actual point

ios first isn't a bet that iphone users are more valuable humans. it's a bet that you'd rather find out quickly and cheaply whether people will pay for your thing, on the platform where paying is easiest and building is simplest, before you spend a quarter on the platform where neither is true.

you can go get the volume later. volume is a scaling problem. willingness to pay is an existence problem, and you want to answer that one first.

so what are you building, and did you pick your platform on purpose or just because it's the phone in your pocket?

i help brands and founders build distribution that actually runs. if you're shipping something and the getting-users part is the bit you keep putting off, i'd love to help. grab a slot here.

---

numbers in this piece come from mirava's ios vs android subscription benchmarks, backlinko's iphone vs android statistics, quash's market share breakdown and piper sandler's taking stock with teens survey.

the glam up numbers are from a case study, written and shared publicly by its co-founder, Nicole Cheung. worth reading in full, there's a lot more in there than the bits i pulled.
