import React, { useState } from 'react';
import { Layout, Typography, Button, Space, Tooltip } from 'antd';
import { Beaker, Home, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import PageUm from '@p/PageUm';
import PageDois from '@p/PageDois';
import PageTres from '@p/PageTres';
import PageQuatro from '@p/PageQuatro';
import PageCinco from '@p/PageCinco';
import Footer from '@c/Footer';
import CalculadoraNoripurum from '@c/aplications/CalculadoraNoripurum';  // Importante manter este import
import checklistPDF from '@a/checklist-seguranca.pdf';

const { Header, Content } = Layout;
const { Title } = Typography;

function Navbar() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [<PageUm />, <PageDois />, <PageTres />, <PageQuatro />, <PageCinco />];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const home = () => {
    setCurrentPage(0);
  };

  return (
    <Layout className="flex flex-col min-h-screen bg-gray-50">
      <Header className="bg-white border-b border-gray-200 fixed w-full z-10 px-4 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
          {/* Left side - Brand */}
          <div className="flex items-center space-x-3">
            <Beaker className="text-blue-600" size={28} />
            <Title level={4} className="!m-0 !text-gray-800 hidden md:block">
              Noripurum: Administração de Ferro Endovenoso
            </Title>
            <Title level={4} className="!m-0 !text-gray-800 md:hidden">
              Noripurum
            </Title>
          </div>

          {/* Right side - Navigation Controls */}
          <div className="flex items-center space-x-4">
            {/* Navigation buttons group */}
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <Tooltip title="Ir para página inicial">
                <Button
                  type="text"
                  icon={<Home size={18} />}
                  onClick={home}
                  className="flex items-center hover:bg-gray-100"
                />
              </Tooltip>
              <div className="h-6 w-px bg-gray-300 mx-2" />
              <Space size="small">
                <Tooltip title="Página anterior">
                  <Button
                    type="text"
                    icon={<ChevronLeft size={18} />}
                    disabled={currentPage === 0}
                    onClick={handlePrevious}
                    className="flex items-center hover:bg-gray-100"
                  />
                </Tooltip>
                <span className="text-sm text-gray-600 font-medium px-2">
                  {currentPage + 1}/{pages.length}
                </span>
                <Tooltip title="Próxima página">
                  <Button
                    type="text"
                    icon={<ChevronRight size={18} />}
                    disabled={currentPage === pages.length - 1}
                    onClick={handleNext}
                    className="flex items-center hover:bg-gray-100"
                  />
                </Tooltip>
              </Space>
            </div>

            {/* Calculadora component */}
            <CalculadoraNoripurum />
            {/* Botão "Abrir PDF em Nova Aba" */}
            <Tooltip title="Abrir Checklist PDF em nova aba">
              <Button
                type="primary"
                icon={<FileText size={20} />}
                href={checklistPDF}
                target="_blank"
                className="flex items-center"
              >
                Checklist PDF
              </Button>
            </Tooltip>
          </div>
        </div>
      </Header>

      <Content className="pt-16 flex-grow flex justify-center">
        <div className="container p-6 bg-white shadow-sm rounded-lg w-full max-w-4xl">
          <Space direction="vertical" className="p-4 bg-white rounded-xl w-full" size="large">
            <div className="w-full">{pages[currentPage]}</div>
          </Space>
        </div>
      </Content>

      <Footer />
    </Layout>
  );
}

export default Navbar;