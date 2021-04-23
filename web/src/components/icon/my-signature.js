import React from 'react';

const MySignatureIcon = (props) => (
  <svg viewBox='0 0 209 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.6 34.9L8.64 33.7L8.6 27.65C8.6 23.4233 8.69333 20.24 8.88 18.1C9.07333 15.9533 9.17 14.8167 9.17 14.69C9.52333 13.57 10.1967 13.01 11.19 13.01C11.41 13.01 11.52 13.1367 11.52 13.39C11.52 13.4233 11.49 13.68 11.43 14.16C10.85 18.64 10.56 24.56 10.56 31.92C10.56 32.82 10.69 34.87 10.95 38.07C11.2033 41.27 11.3133 43.1333 11.28 43.66C11.2533 44.1867 11 44.45 10.52 44.45C9.49333 44.3567 8.36333 43.5567 7.13 42.05C5.89667 40.5433 4.75333 38.64 3.7 36.34C2.64667 34.0333 1.76667 31.3433 1.06 28.27C0.353333 25.2033 0 22.1967 0 19.25C0 16.3033 0.61 13.23 1.83 10.03C2.53 8.24333 3.37 6.61333 4.35 5.14C5.32333 3.66667 6.61 2.44333 8.21 1.47C9.81 0.489997 11.57 0 13.49 0C17.0433 0 19.9333 1.54333 22.16 4.63C24.38 7.72333 25.49 11.2367 25.49 15.17C25.49 19.7767 24.0033 23.25 21.03 25.59C19.43 26.87 17.4933 27.6367 15.22 27.89C14.9933 27.9567 14.88 28.0833 14.88 28.27C14.88 28.91 15.48 30.07 16.68 31.75C17.88 33.43 19.4967 35.0967 21.53 36.75C23.5633 38.3967 25.4933 39.3 27.32 39.46C28.5 39.46 29.5233 38.9967 30.39 38.07C30.71 37.6833 30.9667 37.49 31.16 37.49C31.7333 37.8433 32.02 38.21 32.02 38.59C32.02 39.01 31.62 39.6433 30.82 40.49C30.02 41.3367 29.2533 42.0333 28.52 42.58C26.82 43.8267 24.9067 44.45 22.78 44.45C20.6533 44.45 18.83 43.81 17.31 42.53C15.79 41.25 14.63 39.57 13.83 37.49C12.2633 33.4233 11.48 29.1367 11.48 24.63C11.48 24.15 11.6533 23.91 12 23.91C12.1333 23.9367 12.36 24.08 12.68 24.34C13.6067 25.0733 14.6933 25.5033 15.94 25.63C17.38 25.63 18.4767 25.0167 19.23 23.79C19.9833 22.5567 20.36 20.9233 20.36 18.89C20.36 16.8567 19.99 14.7767 19.25 12.65C18.5167 10.5233 17.3167 8.66 15.65 7.06C13.99 5.46 12.07 4.66 9.89 4.66C8.19667 4.66 6.49333 5.92333 4.78 8.45C3.06667 10.9767 2.21 14 2.21 17.52C2.21 20.2067 2.74 23.19 3.8 26.47C4.85333 29.75 6.38667 32.6867 8.4 35.28H8.45C8.55 35.28 8.6 35.1533 8.6 34.9ZM42.92 56.4C43.6867 56.4 44.07 53.2333 44.07 46.9C44.07 45.5533 44.0533 44.56 44.02 43.92C42.0067 46.64 41 49.09 41 51.27C41 52.5167 41.15 53.6833 41.45 54.77C41.7567 55.8567 42.2467 56.4 42.92 56.4ZM35.33 31.49L35.14 33.41C35.14 34.7833 35.5967 35.9433 36.51 36.89C37.4233 37.8367 38.5333 38.3233 39.84 38.35C40.64 38.3233 41.3867 38.0933 42.08 37.66C42.7667 37.2267 43.2533 36.8167 43.54 36.43L43.92 35.81C43.9533 34.7233 44.1133 33.81 44.4 33.07C44.8533 31.8233 45.3833 31.2 45.99 31.2H46.13C46.4833 31.3267 46.66 31.84 46.66 32.74C46.66 33.12 46.2933 33.87 45.56 34.99L45.17 35.62C45.17 38.08 45.1867 39.9033 45.22 41.09C47.0733 39.33 48.45 37.89 49.35 36.77C49.7633 36.45 50.09 36.29 50.33 36.29C50.57 36.29 50.69 36.41 50.69 36.65C50.69 36.89 50.4833 37.1867 50.07 37.54C49.11 38.3067 47.51 39.9233 45.27 42.39L45.41 49.73C45.41 53.6967 45.14 56.7033 44.6 58.75C44.0533 60.8033 43.0267 61.83 41.52 61.83C40.3067 61.83 39.3 61.2033 38.5 59.95C37.7 58.7033 37.3 57.3433 37.3 55.87C37.3 53.0567 37.8833 50.6167 39.05 48.55C40.2167 46.49 41.8733 44.4033 44.02 42.29C43.9533 39.9833 43.92 38.72 43.92 38.5C43.92 38.2733 43.8333 38.16 43.66 38.16C43.4867 38.16 43.2867 38.32 43.06 38.64C41.94 39.8267 41.1233 40.66 40.61 41.14C39.2367 42.48 37.8533 43.15 36.46 43.15C35.0667 43.15 33.9633 42.6867 33.15 41.76C32.33 40.8333 31.92 39.5133 31.92 37.8C31.92 36.0867 32.25 34.52 32.91 33.1C33.5633 31.6733 34.18 30.96 34.76 30.96C35.14 30.96 35.33 31.1367 35.33 31.49ZM60.39 35.86L60.2 37.2C60.2 37.78 60.4467 38.38 60.94 39C61.4333 39.6267 62.0167 39.94 62.69 39.94C63.2033 39.94 63.62 39.8267 63.94 39.6C64.6467 39.12 65.0867 38.7933 65.26 38.62C65.4333 38.44 65.72 38.35 66.12 38.35C66.52 38.35 66.72 38.4967 66.72 38.79C66.72 39.11 65.97 40.1167 64.47 41.81C63.99 42.3567 63.2867 42.9333 62.36 43.54C61.4267 44.1467 60.6 44.45 59.88 44.45C59.16 44.45 58.6167 44.33 58.25 44.09C57.8833 43.85 57.62 43.4733 57.46 42.96C57.2667 42.26 57.17 41.3967 57.17 40.37C57.17 40.2433 57.09 40.18 56.93 40.18C56.77 40.18 56.4033 40.5 55.83 41.14C54.0367 42.9933 52.5867 43.92 51.48 43.92C50.38 43.92 49.5333 43.6333 48.94 43.06C48.3467 42.48 48.05 41.7433 48.05 40.85C48.05 39.2833 48.4667 37.7867 49.3 36.36C50.1333 34.94 51.1267 33.7967 52.28 32.93C54.84 31.0433 56.8233 30.1 58.23 30.1C60.3433 30.16 61.4 30.91 61.4 32.35C61.4 32.8633 61.1733 33.37 60.72 33.87C60.2733 34.3633 59.86 34.61 59.48 34.61C59.0933 34.61 58.5633 34.2733 57.89 33.6C57.2167 32.9267 56.48 32.59 55.68 32.59C54.88 32.59 54.2267 32.92 53.72 33.58C53.2067 34.2333 52.95 35.0733 52.95 36.1C52.95 37.76 53.83 38.59 55.59 38.59C56.29 38.59 56.8733 38.4167 57.34 38.07C57.8067 37.7167 58.1333 37.33 58.32 36.91C58.8667 35.8233 59.3633 35.28 59.81 35.28C60.1967 35.28 60.39 35.4733 60.39 35.86ZM65.72 37.87C65.72 37.3633 66.2133 36.5233 67.2 35.35C68.1933 34.1833 69.0033 33.6 69.63 33.6C70.25 33.6 70.7133 33.84 71.02 34.32C71.3267 34.8 71.51 35.33 71.57 35.91C71.6367 36.4833 71.82 37.01 72.12 37.49C72.4267 37.97 72.8767 38.21 73.47 38.21C74.0633 38.21 74.59 37.9467 75.05 37.42C75.5167 36.8933 75.8933 36.3 76.18 35.64C76.4667 34.9867 76.85 34.3967 77.33 33.87C77.81 33.3367 78.2833 33.07 78.75 33.07C79.21 33.07 79.5367 33.2633 79.73 33.65C81.7167 37.9033 83.7333 40.03 85.78 40.03C86.1 40.03 86.3867 39.9833 86.64 39.89C86.9 39.7967 87.0933 39.75 87.22 39.75C87.6067 39.75 87.8 40.0533 87.8 40.66C87.8 41.7467 87.23 42.7233 86.09 43.59C84.9567 44.45 83.7967 44.88 82.61 44.88C81.43 44.88 80.43 44.4967 79.61 43.73C78.7967 42.9633 78.2367 42.17 77.93 41.35C77.63 40.5367 77.4067 39.7467 77.26 38.98C77.1133 38.2133 76.96 37.83 76.8 37.83C76.5467 37.83 76.0433 38.3333 75.29 39.34C74.5367 40.3467 73.69 41.3633 72.75 42.39C71.8033 43.41 70.9633 43.92 70.23 43.92C69.4633 43.8267 68.8533 43.45 68.4 42.79C67.9533 42.1367 67.6667 41.4567 67.54 40.75C67.2533 38.83 66.6467 37.87 65.72 37.87ZM126.34 12.58C126.113 12.58 125.93 12.5067 125.79 12.36C125.643 12.22 125.57 12.07 125.57 11.91C125.57 11.75 125.65 11.5233 125.81 11.23C125.97 10.9433 126.05 10.6733 126.05 10.42C126.05 9.68 125.673 9.14333 124.92 8.81C124.173 8.47666 123.4 8.31 122.6 8.31C120.227 8.31 117.753 9.11 115.18 10.71C112.607 12.31 111.093 14.23 110.64 16.47C110.8 17.81 111.467 19.0633 112.64 20.23C113.807 21.4033 115.157 22.4133 116.69 23.26C118.23 24.1067 119.75 24.9633 121.25 25.83C122.757 26.69 124.02 27.7133 125.04 28.9C126.067 30.08 126.58 31.2867 126.58 32.52C126.58 33.7533 126.133 34.9533 125.24 36.12C124.34 37.2867 123.45 38.27 122.57 39.07C121.69 39.87 121.25 40.2967 121.25 40.35C121.25 40.3967 121.3 40.42 121.4 40.42C123.347 40.42 126.017 39.3467 129.41 37.2L129.89 36.87C130.117 36.7367 130.287 36.67 130.4 36.67C130.507 36.67 130.627 36.7667 130.76 36.96C130.887 37.1533 130.95 37.3633 130.95 37.59C130.95 37.81 130.74 38.0333 130.32 38.26C128.467 40.02 125.003 41.7 119.93 43.3C114.857 44.9 110.273 45.7 106.18 45.7C100.58 45.7 97.78 44.0667 97.78 40.8C97.78 40.32 98.26 39.6333 99.22 38.74C100.693 37.3933 101.59 36.72 101.91 36.72C102.23 36.72 103.047 37.12 104.36 37.92C105.667 38.72 107.313 39.52 109.3 40.32C111.287 41.12 113.253 41.52 115.2 41.52C117.153 41.52 118.65 40.9133 119.69 39.7C120.73 38.48 121.25 37.23 121.25 35.95C121.25 34.67 120.707 33.52 119.62 32.5C118.533 31.4733 117.213 30.57 115.66 29.79C114.107 29.0033 112.547 28.1933 110.98 27.36C109.413 26.5267 108.087 25.52 107 24.34C105.907 23.1533 105.36 21.8567 105.36 20.45C105.36 18.1767 106.627 15.7933 109.16 13.3C111.687 10.8 114.58 8.78333 117.84 7.25C121.107 5.71667 123.893 4.95 126.2 4.95C129.08 4.95 130.52 5.91 130.52 7.83C130.52 8.97666 130 10.0567 128.96 11.07C127.92 12.0767 127.047 12.58 126.34 12.58ZM141.22 35.86L141.03 37.2C141.03 37.78 141.277 38.38 141.77 39C142.27 39.6267 142.853 39.94 143.52 39.94C144.033 39.94 144.45 39.8267 144.77 39.6C145.477 39.12 145.917 38.7933 146.09 38.62C146.27 38.44 146.56 38.35 146.96 38.35C147.36 38.35 147.56 38.4967 147.56 38.79C147.56 39.11 146.807 40.1167 145.3 41.81C144.82 42.3567 144.117 42.9333 143.19 43.54C142.263 44.1467 141.44 44.45 140.72 44.45C140 44.45 139.453 44.33 139.08 44.09C138.713 43.85 138.45 43.4733 138.29 42.96C138.097 42.26 138 41.3967 138 40.37C138 40.2433 137.92 40.18 137.76 40.18C137.6 40.18 137.233 40.5 136.66 41.14C134.867 42.9933 133.42 43.92 132.32 43.92C131.213 43.92 130.363 43.6333 129.77 43.06C129.177 42.48 128.88 41.7433 128.88 40.85C128.88 39.2833 129.297 37.7867 130.13 36.36C130.963 34.94 131.957 33.7967 133.11 32.93C135.67 31.0433 137.653 30.1 139.06 30.1C141.173 30.16 142.23 30.91 142.23 32.35C142.23 32.8633 142.007 33.37 141.56 33.87C141.107 34.3633 140.69 34.61 140.31 34.61C139.923 34.61 139.393 34.2733 138.72 33.6C138.053 32.9267 137.32 32.59 136.52 32.59C135.72 32.59 135.063 32.92 134.55 33.58C134.037 34.2333 133.78 35.0733 133.78 36.1C133.78 37.76 134.66 38.59 136.42 38.59C137.127 38.59 137.71 38.4167 138.17 38.07C138.637 37.7167 138.967 37.33 139.16 36.91C139.7 35.8233 140.193 35.28 140.64 35.28C141.027 35.28 141.22 35.4733 141.22 35.86ZM146.55 37.87C146.55 37.3633 147.047 36.5233 148.04 35.35C149.027 34.1833 149.833 33.6 150.46 33.6C151.087 33.6 151.55 33.84 151.85 34.32C152.157 34.8 152.34 35.33 152.4 35.91C152.467 36.4833 152.653 37.01 152.96 37.49C153.26 37.97 153.707 38.21 154.3 38.21C154.893 38.21 155.42 37.9467 155.88 37.42C156.347 36.8933 156.723 36.3 157.01 35.64C157.297 34.9867 157.68 34.3967 158.16 33.87C158.64 33.3367 159.113 33.07 159.58 33.07C160.047 33.07 160.373 33.2633 160.56 33.65C162.547 37.9033 164.563 40.03 166.61 40.03C166.93 40.03 167.22 39.9833 167.48 39.89C167.733 39.7967 167.923 39.75 168.05 39.75C168.437 39.75 168.63 40.0533 168.63 40.66C168.63 41.7467 168.06 42.7233 166.92 43.59C165.787 44.45 164.627 44.88 163.44 44.88C162.26 44.88 161.26 44.4967 160.44 43.73C159.627 42.9633 159.067 42.17 158.76 41.35C158.46 40.5367 158.237 39.7467 158.09 38.98C157.95 38.2133 157.8 37.83 157.64 37.83C157.38 37.83 156.873 38.3333 156.12 39.34C155.373 40.3467 154.527 41.3633 153.58 42.39C152.633 43.41 151.793 43.92 151.06 43.92C150.293 43.8267 149.687 43.45 149.24 42.79C148.787 42.1367 148.497 41.4567 148.37 40.75C148.083 38.83 147.477 37.87 146.55 37.87ZM159.17 27.27C159.17 26.63 159.683 26.15 160.71 25.83C162.277 25.1567 164.837 24.1167 168.39 22.71C169.03 17.8433 169.99 15.41 171.27 15.41C172.103 15.41 172.52 16.7367 172.52 19.39C172.52 20.1633 172.503 20.74 172.47 21.12C177.33 19.2667 180.593 18.13 182.26 17.71C183.927 17.2967 185.253 17.09 186.24 17.09C187.747 17.09 188.5 17.6333 188.5 18.72C188.5 19.0733 188.277 19.3633 187.83 19.59C185.843 20.5767 184.61 21.07 184.13 21.07C184.037 21.07 183.877 21 183.65 20.86C183.43 20.7133 183.173 20.64 182.88 20.64C182.593 20.64 182.003 20.7533 181.11 20.98C179.283 21.46 176.29 22.3867 172.13 23.76C171.75 26.26 171.19 28.0533 170.45 29.14C170.577 32.7867 171.057 35.25 171.89 36.53C172.277 37.1367 172.83 37.6633 173.55 38.11C174.27 38.5633 175.157 38.79 176.21 38.79C177.27 38.79 178.31 38.31 179.33 37.35C179.523 37.1567 179.683 37.06 179.81 37.06C180.07 37.06 180.2 37.2667 180.2 37.68C180.2 39.0267 179.303 40.38 177.51 41.74C175.717 43.1 174.003 43.78 172.37 43.78C169.137 43.78 167.52 41.1567 167.52 35.91C167.52 32.61 167.713 29.0567 168.1 25.25C165.447 26.2767 163.487 27.11 162.22 27.75C160.953 28.39 160.21 28.71 159.99 28.71C159.763 28.71 159.57 28.55 159.41 28.23C159.25 27.91 159.17 27.59 159.17 27.27ZM189.51 36.96C188.003 36.96 186.82 36.5767 185.96 35.81C185.093 35.0433 184.597 34.0667 184.47 32.88C183.957 33.2667 183.7 33.98 183.7 35.02C183.7 36.06 183.997 36.97 184.59 37.75C185.183 38.5367 185.92 38.93 186.8 38.93C187.68 38.93 188.35 38.7067 188.81 38.26C189.277 37.8133 189.51 37.38 189.51 36.96ZM191.38 33.75C191.473 34.0367 191.593 34.18 191.74 34.18C191.887 34.18 192.133 34.09 192.48 33.91C192.833 33.7367 193.14 33.65 193.4 33.65C193.653 33.65 193.78 33.81 193.78 34.13C193.78 34.45 193.437 34.9767 192.75 35.71C192.063 36.45 191.48 36.82 191 36.82C190.327 38.64 189.213 40.3267 187.66 41.88C186.107 43.4333 184.513 44.21 182.88 44.21C181.733 44.21 180.773 43.8333 180 43.08C179.233 42.3267 178.85 41.2233 178.85 39.77C178.85 38.3167 179.46 36.7333 180.68 35.02C181.893 33.3067 183.14 32.45 184.42 32.45V32.26C184.42 31.5533 184.66 30.9833 185.14 30.55C185.62 30.1233 186.213 29.91 186.92 29.91C189.093 29.91 190.58 31.19 191.38 33.75ZM203.91 38.93C204.163 38.93 204.58 38.7367 205.16 38.35C205.733 37.97 206.197 37.5867 206.55 37.2L207.08 36.67C207.3 36.45 207.523 36.34 207.75 36.34C208.13 36.34 208.32 36.5633 208.32 37.01C208.32 37.17 208.307 37.2967 208.28 37.39C207.447 39.41 205.91 41.0367 203.67 42.27C201.43 43.4967 199.43 44.11 197.67 44.11C194.243 44.11 192.53 42.7667 192.53 40.08C192.53 39.7267 192.947 39.1667 193.78 38.4C194.613 37.6333 195.22 37.1533 195.6 36.96C195.86 36.7667 196.06 36.67 196.2 36.67C196.347 36.67 196.467 36.7367 196.56 36.87C196.66 36.9967 196.773 37.1567 196.9 37.35C197.027 37.5367 197.14 37.6967 197.24 37.83C197.333 37.9567 197.46 38.13 197.62 38.35C197.78 38.5767 197.947 38.7633 198.12 38.91C198.3 39.05 198.5 39.1833 198.72 39.31C199.14 39.63 199.58 39.79 200.04 39.79C200.507 39.79 200.74 39.52 200.74 38.98C200.74 37.6333 200.243 36.4733 199.25 35.5C198.257 34.52 197.427 34.03 196.76 34.03C196.6 34.03 196.44 34.1267 196.28 34.32L194.5 36.1C194.213 36.3867 194.007 36.53 193.88 36.53C193.4 36.53 193.16 36.3233 193.16 35.91C196.58 31.7167 198.61 29.62 199.25 29.62C200.15 29.62 201.173 30.2267 202.32 31.44C203.473 32.66 204.05 33.8767 204.05 35.09C204.05 36.2433 203.963 37.1233 203.79 37.73C203.61 38.3367 203.52 38.69 203.52 38.79C203.52 38.8833 203.65 38.93 203.91 38.93Z'
      fill='currentColor'
    />
  </svg>
);

export default MySignatureIcon;
