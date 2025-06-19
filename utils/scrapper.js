import axios from "axios";
import * as cheerio from "cheerio";

export async function getCharacter(name) {
  try {
    const url = `https://www.rucoyonline.com/characters/${encodeURIComponent(
      name
    )}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const character = {};

    $("table.character-table")
      .first()
      .find("tbody tr")
      .each((_, tr) => {
        const tds = $(tr).find("td");
        const key = tds.eq(0).text().trim().toLowerCase().replace(/ /g, "_");
        let value = tds.eq(1).text().trim();

        if (key === "guild") {
          const guildLink = tds.eq(1).find("a");
          value = guildLink.length ? guildLink.text().trim() : value;
        }

        character[key] = value;
      });

    const recent = [];
    $("table.character-table")
      .eq(1)
      .find("tbody tr")
      .each((_, tr) => {
        recent.push($(tr).text().trim().replace(/\s+/g, " "));
      });

    return { info: character, recent };
  } catch (error) {
    throw new Error("Failed to scrap character data from rucoy online.");
  }
}

export async function getGuild(name) {
  try {
    const url = `https://www.rucoyonline.com/guild/${encodeURIComponent(name)}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const box = $(".guild-box");
    if (!box.length) throw new Error("Guild not found");

    const guildName = box.find("h3").first().text().trim();

    const description = box
      .find("p")
      .first()
      .text()
      .trim()
      .replace(/\s+/g, " ");

    const founded = box
      .find("p i")
      .first()
      .text()
      .replace("Founded on", "")
      .trim();

    const members = [];
    box.find("table tbody tr").each((_, tr) => {
      const tds = $(tr).find("td");
      const firstCell = tds.eq(0);
      const nameAnchor = firstCell.find("a");
      const memberName = nameAnchor.text().trim();

      let role = "Member";
      const cellText = firstCell.text();
      const roleMatch = cellText.match(/\(([^)]+)\)/);
      if (roleMatch) role = roleMatch[1].trim();

      const level = tds.eq(1).text().trim();
      const joinDate = tds.eq(2).text().trim();

      members.push({ name: memberName, role, level, joinDate });
    });

    return { guildName, description, founded, members };
  } catch (error) {
    throw new Error("Failed to scrap guild data from rucoy online.");
  }
}
