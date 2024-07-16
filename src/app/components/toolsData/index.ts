// data/toolsData.ts
import prometheus from "@/icons/prometheus.png";
import loki from "@/icons/Loki.png";
import bitbucket from "@/icons/bitbucket.png";
import gitlab from "@/icons/gitlab.png";
import kotlin from "@/icons/kotlin.png";
import android from "@/icons/android.png";
import java from "@/icons/java.png";
import azure from "@/icons/azure.png";
import gcp from "@/icons/GCP.png";
import digitalocean from "@/icons/digitalOcean.png";
import aws from "@/icons/AWS.png";
import kubernetes from "@/icons/kubernetes.png";
import elk from "@/icons/ELK.png";
import grafana from "@/icons/Grafana.png";
import terraform from "@/icons/terraform.png";
import ios from "@/icons/ios.png";
import swift from "@/icons/Swift.png";
import flutter from "@/icons/Flutter.png";
import nextjs from "@/icons/nextjs.webp";
import react from "@/icons/React.JS.png";
import javascript from "@/icons/js.png";
import balsamic from "@/icons/Balsamic.png";
import invision from "@/icons/invision.png";
import figma from "@/icons/figma.png";
import docker from "@/icons/Docker.png";
import postgresql from "@/icons/PostgreSQL.png";
import python from "@/icons/python.png";
import nodejs from "@/icons/NodeJS.png";
import php from "@/icons/PHP.png";
import go from "@/icons/GO.png";
import antdesign from "@/icons/AntDesign.png";
import gatsby from "@/icons/Gatsby.JS.png";
import vue from "@/icons/Vue.JS.png";
import principle from "@/icons/Principle.png";
import sketch from "@/icons/Sketch.png";
import adobesuite from "@/icons/Adobesuite.png";
import youtrack from "@/icons/YouTrack.png";
import appium from "@/icons/Appium.png";
import cypress from "@/icons/Cypress.png";
import jmeter from "@/icons/Jmeter.png";
import mongodb from "@/icons/MongoDB.png";
import cassandra from "@/icons/Cassandra.png";
import sass from "@/icons/Sass.png";
import materialui from "@/icons/Material UI.png";
import zeplin from "@/icons/Zeplin.png";
import illustrator from "@/icons/Illustrator.png";
import lottie from "@/icons/Lottie.png";
import photoshop from "@/icons/Photoshop.png";

export interface Tool {
  name: string;
  category: string;
  icon: any;
}

export const tools: Tool[] = [
  { name: "Prometheus", category: "Devops", icon: prometheus },
  { name: "Loki", category: "Devops", icon: loki },
  { name: "Bitbucket", category: "Devops", icon: bitbucket },
  { name: "GitLab", category: "Gitlab", icon: gitlab },
  { name: "Kotlin", category: "Mobile", icon: kotlin },
  { name: "Android", category: "Mobile", icon: android },
  { name: "Java", category: "Mobile", icon: java },
  { name: "Azure", category: "Infrastructure", icon: azure },
  { name: "GCP", category: "Infrastructure", icon: gcp },
  { name: "DigitalOcean", category: "Infrastructure", icon: digitalocean },
  { name: "AWS", category: "Infrastructure", icon: aws },
  { name: "Kubernetes", category: "Infrastructure", icon: kubernetes },
  { name: "ELK", category: "Devops", icon: elk },
  { name: "Grafana", category: "Devops", icon: grafana },
  { name: "Terraform", category: "Devops", icon: terraform },
  { name: "iOS", category: "Mobile", icon: ios },
  { name: "Swift", category: "Mobile", icon: swift },
  { name: "Flutter", category: "Mobile", icon: flutter },
  { name: "Next.JS", category: "Frontend", icon: nextjs },
  { name: "React.JS", category: "Frontend", icon: react },
  { name: "JavaScript", category: "Frontend", icon: javascript },
  { name: "Balsamic", category: "UX/UI", icon: balsamic },
  { name: "Invision", category: "UX/UI", icon: invision },
  { name: "Figma", category: "UX/UI", icon: figma },
  { name: "Docker", category: "Devops", icon: docker },
  { name: "PostgreSQL", category: "Backend", icon: postgresql },
  { name: "Python", category: "Backend", icon: python },
  { name: "Node.JS", category: "Backend", icon: nodejs },
  { name: "PHP", category: "Backend", icon: php },
  { name: "GO", category: "Backend", icon: go },
  { name: "Ant Design", category: "Frontend", icon: antdesign },
  { name: "Gatsby.JS", category: "Frontend", icon: gatsby },
  { name: "Vue.JS", category: "Frontend", icon: vue },
  { name: "Principle", category: "UX/UI", icon: principle },
  { name: "Sketch", category: "UX/UI", icon: sketch },
  { name: "Adobe suite", category: "UX/UI", icon: adobesuite },
  { name: "YouTrack", category: "Testing", icon: youtrack },
  { name: "Appium", category: "Testing", icon: appium },
  { name: "Cypress", category: "Testing", icon: cypress },
  { name: "Jmeter", category: "Testing", icon: jmeter },
  { name: "MongoDB", category: "Backend", icon: mongodb },
  { name: "Cassandra", category: "Backend", icon: cassandra },
  { name: "Sass", category: "Frontend", icon: sass },
  { name: "Material UI", category: "Frontend", icon: materialui },
  { name: "Zeplin", category: "UX/UI", icon: zeplin },
  { name: "Illustrator", category: "UX/UI", icon: illustrator },
  { name: "Lottie", category: "UX/UI", icon: lottie },
  { name: "Photoshop", category: "UX/UI", icon: photoshop },
];
